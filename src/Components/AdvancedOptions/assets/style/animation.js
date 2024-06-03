const animation = () => {
  return `
@media screen {
    html [data-aos^='fade'][data-aos^='fade'] {
      opacity: 0;
      transition-property: opacity, transform; }
      html [data-aos^='fade'][data-aos^='fade'].aos-animate {
        opacity: 1;
        transform: none; }
    html [data-aos='fade-up'] {
      transform: translate3d(0, 100px, 0); }
    html [data-aos='fade-down'] {
      transform: translate3d(0, -100px, 0); }
    html [data-aos='fade-right'] {
      transform: translate3d(-100px, 0, 0); }
    html [data-aos='fade-left'] {
      transform: translate3d(100px, 0, 0); }
    html [data-aos='fade-up-right'] {
      transform: translate3d(-100px, 100px, 0); }
    html [data-aos='fade-up-left'] {
      transform: translate3d(100px, 100px, 0); }
    html [data-aos='fade-down-right'] {
      transform: translate3d(-100px, -100px, 0); }
    html [data-aos='fade-down-left'] {
      transform: translate3d(100px, -100px, 0); }
    html [data-aos^='zoom'][data-aos^='zoom'] {
      opacity: 0;
      transition-property: opacity, transform; }
      html [data-aos^='zoom'][data-aos^='zoom'].aos-animate {
        opacity: 1;
        transform: translate3d(0, 0, 0) scale(1); }
    html [data-aos='zoom-in'] {
      transform: scale(0.6); }
    html [data-aos='zoom-in-up'] {
      transform: translate3d(0, 100px, 0) scale(0.6); }
    html [data-aos='zoom-in-down'] {
      transform: translate3d(0, -100px, 0) scale(0.6); }
    html [data-aos='zoom-in-right'] {
      transform: translate3d(-100px, 0, 0) scale(0.6); }
    html [data-aos='zoom-in-left'] {
      transform: translate3d(100px, 0, 0) scale(0.6); }
    html [data-aos='zoom-out'] {
      transform: scale(1.2); }
    html [data-aos='zoom-out-up'] {
      transform: translate3d(0, 100px, 0) scale(1.2); }
    html [data-aos='zoom-out-down'] {
      transform: translate3d(0, -100px, 0) scale(1.2); }
    html [data-aos='zoom-out-right'] {
      transform: translate3d(-100px, 0, 0) scale(1.2); }
    html [data-aos='zoom-out-left'] {
      transform: translate3d(100px, 0, 0) scale(1.2); }
    html [data-aos^='slide'][data-aos^='slide'] {
      transition-property: transform;
      visibility: hidden; }
      html [data-aos^='slide'][data-aos^='slide'].aos-animate {
        visibility: visible;
        transform: translate3d(0, 0, 0); }
    html [data-aos='slide-up'] {
      transform: translate3d(0, 100%, 0); }
    html [data-aos='slide-down'] {
      transform: translate3d(0, -100%, 0); }
    html [data-aos='slide-right'] {
      transform: translate3d(-100%, 0, 0); }
    html [data-aos='slide-left'] {
      transform: translate3d(100%, 0, 0); }
    html [data-aos^='flip'][data-aos^='flip'] {
      backface-visibility: hidden;
      transition-property: transform; }
    html [data-aos='flip-left'] {
      transform: perspective(2500px) rotateY(-100deg); }
      html [data-aos='flip-left'].aos-animate {
        transform: perspective(2500px) rotateY(0); }
    html [data-aos='flip-right'] {
      transform: perspective(2500px) rotateY(100deg); }
      html [data-aos='flip-right'].aos-animate {
        transform: perspective(2500px) rotateY(0); }
    html [data-aos='flip-up'] {
      transform: perspective(2500px) rotateX(-100deg); }
      html [data-aos='flip-up'].aos-animate {
        transform: perspective(2500px) rotateX(0); }
    html [data-aos='flip-down'] {
      transform: perspective(2500px) rotateX(100deg); }
      html [data-aos='flip-down'].aos-animate {
        transform: perspective(2500px) rotateX(0); } }
`;
};

export default animation;
