<template>
  <RouterView />
</template>

<style>
@import url('https://fonts.googleapis.com/css2?family=Inter:wght@700&family=Lato:wght@400;700&display=swap');

:root {
  --logo-mikuni: 'Inter', sans-serif;
  --p-mikuni: 'Lato', sans-serif;
}

* {
  font-family: var(--p-mikuni);
}

@keyframes onLoad {
  0% {
    color: #2F3E46;
    margin-bottom: -80px;
    opacity: 0;
  }

  80% {
    color: #2F3E46;
    margin-bottom: -80px;
    opacity: 0;
  }
}


/**Transitions */
.v-enter-active,
.v-leave-active {
  transition: opacity 0.5s ease;
}

.v-enter-from,
.v-leave-to {
  opacity: 0;
}
</style>