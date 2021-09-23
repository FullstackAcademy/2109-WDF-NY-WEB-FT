const exercises = [
  { id: 1, name: 'Bicycling', completed: false, duration: 30 },
  { id: 2, name: 'Running', completed: true, duration: 45 },
  { id: 3, name: 'Swimming', completed: true, duration: 30 },
  { id: 4, name: 'Running', completed: true, duration: 20 },
]

const toggleCompleted = (exercise, icon) => {
  if (exercise.completed) {
    icon.classList.remove('fas', 'fa-check-circle')
    icon.classList.add('far', 'fa-circle')
  } else {
    icon.classList.remove('far', 'fa-circle')
    icon.classList.add('fas', 'fa-check-circle')
  }
  exercise.completed = !exercise.completed
}

const updateAnalytics = allExercises => {
  const completedExercises = allExercises.filter(ex => ex.completed)
  const minutesExercised = completedExercises.reduce((total, ex) => {
    return total + ex.duration
  }, 0)
  const percentageCompleted =
    (completedExercises.length / allExercises.length) * 100 + '%'

  const totalMinutesElem = document.getElementById('total-minutes')
  const percentageElem = document.getElementById('percentage-completed')
  totalMinutesElem.innerHTML = minutesExercised
  percentageElem.innerHTML = percentageCompleted
}

exercises.forEach(exercise => {
  const exerciseElem = document.getElementById(`exercise-${exercise.id}`)
  const icon = exerciseElem.querySelector('i')
  icon.addEventListener('click', () => {
    toggleCompleted(exercise, icon)
    updateAnalytics(exercises)
  })
})
