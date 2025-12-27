const about = () => {
  return (`
      <div class="title">
        <h2 class="reveal"><span>01.</span>About me</h2>
      </div>
      <div class="about_sec">
        <div>
          <p>My name is Mohamed Khaled, a high school student and web developer with a strong interest in building modern, clean, and user-focused web experiences. I started learning programming out of curiosity, and over time it became a serious passion and a long-term goal.</p>
          <p>I mainly focus on frontend web development, paying close attention to code structure, scalability, and user experience. I enjoy turning ideas into real, functional interfaces and continuously improving my skills through hands-on projects and experimentation.</p>
          <p>My goal is to build impactful digital products and work on real-world SaaS projects that solve practical problems, both locally and globally. I believe in continuous learning, disciplined growth, and building things the right way—not just making them work.</p>
          <div class="skills" class="reveal">
            <div class="skill">
              <span class="reveal">→ HTML5</span>
              <span class="reveal">→ CSS3</span>
              <span class="reveal">→ termux</span>
              <span class="reveal">→ Git & Github</span>
            </div>
            <div class="skill" class="reveal">
              <span class="reveal">→ C++</span>
              <span class="reveal">→ JavaScript ES6</span>
              <span class="reveal">→ TypeScript</span>
            </div>
          </div>
        </div>
        <div class="about_img" class="reveal">
          <div>
            <img src="public/img/profile.jpg" alt="Profile picture" class="reveal">
          </div>
        </div>
      </div>
	`);
}

export default about;