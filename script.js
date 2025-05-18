@import url('https://fonts.googleapis.com/css?family=Montserrat:700');

body {
  margin: 0;
  padding: 0;
  background: #000;
  font-family: 'Montserrat', sans-serif;
  overflow: hidden;
}

.container {
  display: flex;
  align-items: center;
  justify-content: center;
  height: 100vh;
}

.box {
  text-align: center;
}

.title {
  position: relative;
  color: #fff;
  font-size: 4em;
}

.title h1 {
  position: relative;
  margin: 0;
  padding: 0;
  z-index: 2;
}

.title span.block {
  position: absolute;
  width: 0%;
  height: 100%;
  background: #f00;
  left: 0;
  top: 0;
  animation: slide 1s ease forwards;
  z-index: 1;
}

.role {
  position: relative;
  color: #fff;
  font-size: 2em;
  margin-top: 20px;
}

.role .block {
  position: absolute;
  width: 0%;
  height: 100%;
  background: #00f;
  left: 0;
  top: 0;
  animation: slide 1s ease 1s forwards;
  z-index: 1;
}

@keyframes slide {
  0% {
    width: 0%;
    left: 0;
  }
  50% {
    width: 100%;
    left: 0;
  }
  100% {
    width: 0%;
    left: 100%;
  }
}
