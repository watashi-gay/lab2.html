document.addEventListener('DOMContentLoaded', () => {
    const languageFilter = document.getElementById('language-filter');
    const exercises = document.querySelectorAll('.exercise-item');
  
    languageFilter.addEventListener('change', function() {
      const selectedLanguage = this.value;
  
      exercises.forEach(exercise => {
        const exerciseLanguage = exercise.getAttribute('exercise-language');
  
        if (selectedLanguage === 'all' || exerciseLanguage === selectedLanguage) {
          exercise.style.display = 'block'; //Show the exercise
        } else {
          exercise.style.display = 'none'; //Hide the exercise
        }
      });
    });
  });