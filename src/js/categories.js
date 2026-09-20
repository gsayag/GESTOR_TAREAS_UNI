import { getTasks } from './tasks.js'


const defaultCategories = [
  {
    name: 'Desarrollo Web',
    icon: '</>',
    className: 'development',
    description:
      'Proyectos y actividades relacionadas con desarrollo web.'
  },

  {
    name: 'Matemática',
    icon: '∑',
    className: 'mathematics',
    description:
      'Ejercicios, prácticas y actividades del curso.'
  },

  {
    name: 'Programación',
    icon: '{ }',
    className: 'programming',
    description:
      'Laboratorios, proyectos y ejercicios de programación.'
  },

  {
    name: 'Universidad',
    icon: 'U',
    className: 'university',
    description:
      'Actividades académicas generales y fechas importantes.'
  },

  {
    name: 'Personal',
    icon: 'P',
    className: 'personal',
    description:
      'Actividades personales y organización de la semana.'
  }
]


export function getCategories() {
  const tasks = getTasks()


  return defaultCategories.map(
    (category) => {

      const categoryTasks =
        tasks.filter(
          (task) =>
            task.category === category.name
        )


      const completed =
        categoryTasks.filter(
          (task) => task.completed
        ).length


      const pending =
        categoryTasks.length - completed


      const progress =
        categoryTasks.length === 0
          ? 0
          : Math.round(
              (
                completed /
                categoryTasks.length
              ) * 100
            )


      return {
        ...category,
        total: categoryTasks.length,
        completed,
        pending,
        progress
      }
    }
  )
}


export function getCategoriesSummary() {
  const categories =
    getCategories()

  const totalTasks =
    categories.reduce(
      (total, category) =>
        total + category.total,
      0
    )


  const categoriesWithTasks =
    categories.filter(
      (category) => category.total > 0
    )


  const bestCategory =
    [...categoriesWithTasks]
      .sort(
        (categoryA, categoryB) =>
          categoryB.progress -
          categoryA.progress
      )[0]


  return {
    totalCategories:
      categories.length,

    totalTasks,

    bestProgress:
      bestCategory
        ? bestCategory.progress
        : 0,

    bestCategory:
      bestCategory
        ? bestCategory.name
        : 'Sin datos'
  }
}