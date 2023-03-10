<template>
  <div class="loader"></div>
</template>

<style>
.loader {
  width: 48px;
  height: 48px;
  border: 5px solid #6c6c6c;
  border-bottom-color: transparent;
  border-radius: 50%;
  display: inline-block;
  box-sizing: border-box;
  animation: rotation 1s linear infinite;
}

@keyframes rotation {
  0% {
    transform: rotate(0deg);
  }
  100% {
    transform: rotate(360deg);
  }
}
</style>
