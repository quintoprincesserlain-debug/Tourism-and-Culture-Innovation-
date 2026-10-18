document.getElementById('learnBtn').addEventListener('click', () => {
  document.getElementById('proposal').scrollIntoView({ behavior: 'smooth' });
  document.getElementById('note').textContent = 'Explore the proposal, features, and implementation plan above.';
});
