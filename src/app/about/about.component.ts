import { Component, OnInit, HostListener } from '@angular/core';

interface Skills {
  title: string;
  description: string;
}

@Component({
  selector: 'app-about',
  standalone: true,
  imports: [],
  templateUrl: './about.component.html',
  styleUrl: './about.component.css'
})
export class AboutComponent implements OnInit {
  isSkillsVisible = false;

  skills: Skills[] = [
    {
      title: 'Frontend Development',
      description: '<strong>Expertise</strong> in front-end development utilizing <strong>Angular</strong> and proficiently applying <strong>TypeScript</strong> and modern <strong>JavaScript (ES6+)</strong>. I specialize in <strong>component-based architecture</strong>, advanced <strong>routing</strong>, and crafting responsive <strong>UI/UX solutions</strong>'
    },
    {
      title: 'Backend',
      description: 'Experienced with the Microsoft stack for full-stack application development: utilizing <strong>ASP.NET Core (C#)</strong>, <strong>Entity Framework Core</strong> for ORM, and <strong>SQL Server</strong> for robust database management.'
    },
    {
      title: 'Programming Fundamentals',
      description: 'Proficient across multiple languages, including <strong>C++</strong>, <strong>C#</strong>, <strong>Java</strong>, and <strong>C</strong>. I possess a **strong grasp of Object-Oriented Programming (OOP)** fundamentals such as <strong>inheritance</strong>, <strong>encapsulation</strong>, and <strong>polymorphism</strong>, applying these concepts to build robust software systems.'
    },
    {
      title: 'Development Tools',
      description: 'Proficient with <strong>Visual Studio</strong> and <strong>VS Code</strong> for application development and debugging, <strong>Node.js</strong> for server-side execution, <strong>NPM</strong> for efficient dependency management, and <strong>SSMS (SQL Server Management Studio)</strong> for database design, querying, and optimization.'
    },
    {
      title: 'Version Control',
      description: 'Uses <strong>Git</strong> and <strong>GitHub</strong> for project management, version tracking, and collaboration.'
    },
    {
      title: 'Architecture Integration',
      description: 'Combines programming and architectural knowledge to create smart, interactive design tools and data-driven workflows.'
    }
  ];

  @HostListener('window:scroll', [])
  onWindowScroll() {
    this.checkSkillsVisibility();
  }

  ngOnInit() {
    // Check visibility on initial load
    setTimeout(() => {
      this.checkSkillsVisibility();
    }, 100);
  }

  checkSkillsVisibility() {
    const skillsSection = document.querySelector('.skills-section');
    if (skillsSection) {
      const rect = skillsSection.getBoundingClientRect();
      const windowHeight = window.innerHeight;
      
      // Trigger animation when section is 75% visible
      const isVisible = rect.top < windowHeight * 0.75 && rect.bottom > 0;
      
      if (isVisible && !this.isSkillsVisible) {
        this.isSkillsVisible = true;
      }
    }
  }
}
