document.addEventListener('DOMContentLoaded', () => {
    const difficultyFilter = document.getElementById('difficulty-filter');
    const exercises = document.querySelectorAll('.exercise-item');
  
    difficultyFilter.addEventListener('change', function() {
      const selectedDifficulty = this.value;
  
      exercises.forEach(exercise => {
        const exerciseDifficulty = exercise.getAttribute('exercise-difficulty');
  
        if (selectedDifficulty === 'all' || exerciseDifficulty === selectedDifficulty) {
          exercise.style.display = 'block'; //Show the exercise
        } else {
          exercise.style.display = 'none'; //Hide the exercise
        }
      });
    });
  });