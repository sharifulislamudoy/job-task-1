function toggleFAQ(button) {
      const answer = button.nextElementSibling;
      const arrow = button.querySelector('svg');
      if (answer.classList.contains('hidden')) {
        answer.classList.remove('hidden');
        arrow.style.transform = 'rotate(180deg)';
      } else {
        answer.classList.add('hidden');
        arrow.style.transform = 'rotate(0deg)';
      }
    }