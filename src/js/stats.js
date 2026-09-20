import { getTasks } from './tasks.js'


function parseTaskDate(dateString) {
  const [year, month, day] = dateString
    .split('-')
    .map(Number)

  return new Date(
    year,
    month - 1,
    day
  )
}


function getToday() {
  const now = new Date()

  return new Date(
    now.getFullYear(),
    now.getMonth(),
    now.getDate()
  )
}


function getDateKey(date) {
  const year = date.getFullYear()

  const month = String(
    date.getMonth() + 1
  ).padStart(2, '0')

  const day = String(
    date.getDate()
  ).padStart(2, '0')

  return `${year}-${month}-${day}`
}


export function getTaskStats() {
  const tasks = getTasks()

  const today = getToday()
  const todayKey = getDateKey(today)

  const total = tasks.length

  const completed = tasks.filter(
    (task) => task.completed
  ).length

  const pending = tasks.filter(
    (task) => !task.completed
  ).length

  const overdue = tasks.filter((task) => {
    return (
      !task.completed &&
      parseTaskDate(task.date) < today
    )
  }).length

  const dueToday = tasks.filter((task) => {
    return (
      !task.completed &&
      task.date === todayKey
    )
  }).length

  const highPriority = tasks.filter((task) => {
    return (
      !task.completed &&
      task.priority === 'high'
    )
  }).length

  const progress =
    total === 0
      ? 0
      : Math.round(
          (completed / total) * 100
        )


  return {
    total,
    completed,
    pending,
    overdue,
    dueToday,
    highPriority,
    progress
  }
}


export function getUpcomingTasks(limit = 3) {
  const today = getToday()

  return getTasks()
    .filter((task) => {
      return (
        !task.completed &&
        parseTaskDate(task.date) >= today
      )
    })
    .sort((taskA, taskB) => {
      return (
        parseTaskDate(taskA.date) -
        parseTaskDate(taskB.date)
      )
    })
    .slice(0, limit)
}


export function getPendingTasksSorted() {
  return getTasks()
    .filter((task) => !task.completed)
    .sort((taskA, taskB) => {
      return (
        parseTaskDate(taskA.date) -
        parseTaskDate(taskB.date)
      )
    })
}