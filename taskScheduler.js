// 1. TASK DATA

const tasks = [
  {
    name: "Study JavaScript",
    startTime: 9,
    endTime: 11,
    priority: "High",
  },
  {
    name: "Read a book",
    startTime: 10,
    endTime: 12,
    priority: "Low",
  },
  {
    name: "Complete assignment",
    startTime: 13,
    endTime: 15,
    priority: "High",
  },
  {
    name: "Exercise",
    startTime: 11,
    endTime: 12,
    priority: "Medium",
  },
  {
    name: "Review notes",
    startTime: 14,
    endTime: 16,
    priority: "Medium",
  },
  {
    name: "Practice algorithms",
    startTime: 8,
    endTime: 10,
    priority: "High",
  },
];

// 2. SORT TASKS BY START TIME

function sortTasksByStartTime(tasks) {
  return [...tasks].sort((a, b) => a.startTime - b.startTime);
}

// 3. GROUP TASKS BY PRIORITY

function groupTasksByPriority(tasks) {
  const groupedTasks = {
    High: [],
    Medium: [],
    Low: [],
  };

  for (const task of tasks) {
    groupedTasks[task.priority].push(task);
  }

  return groupedTasks;
}

// 4. DETECT OVERLAPPING TASKS

function findOverlappingTasks(tasks) {
  const sortedTasks = sortTasksByStartTime(tasks);
  const overlappingPairs = [];

  for (let i = 0; i < sortedTasks.length; i++) {
    for (let j = i + 1; j < sortedTasks.length; j++) {
      // Because tasks are sorted, later tasks cannot overlap
      // with the current task once they start at or after its end time.
      if (sortedTasks[j].startTime >= sortedTasks[i].endTime) {
        break;
      }

      overlappingPairs.push({
        task1: sortedTasks[i].name,
        task2: sortedTasks[j].name,
      });
    }
  }

  return overlappingPairs;
}

// 5. DISPLAY RESULTS

console.log("========== ALL TASKS ==========");
console.table(tasks);

console.log("\n========== SORTED TASKS ==========");
console.table(sortTasksByStartTime(tasks));

console.log("\n========== TASKS GROUPED BY PRIORITY ==========");
console.log(groupTasksByPriority(tasks));

console.log("\n========== OVERLAPPING TASKS ==========");
console.table(findOverlappingTasks(tasks));
