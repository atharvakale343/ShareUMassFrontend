<div class="loading-screen bg-inherit">
  <div class="spinner" />
</div>

<style>
  .loading-screen {
    display: flex;
    width: 100%;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    height: 100vh;
    background-color: #ffffff; /* Set your background color */
    color: #343a40; /* Set your text color */
  }

  .spinner {
    border: 4px solid #ffffff;
    border-top: 4px solid #881c1c; /* Set your spinner color */
    border-radius: 50%;
    width: 100px;
    height: 100px;
    animation: spin 1s linear infinite;
  }

  @keyframes spin {
    0% {
      transform: rotate(0deg);
    }
    100% {
      transform: rotate(360deg);
    }
  }
</style>
