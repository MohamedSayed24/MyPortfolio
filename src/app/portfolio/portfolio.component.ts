
import { Component, OnInit, HostListener } from '@angular/core';
import { CommonModule } from '@angular/common';

interface Project {
  id: number;
  title: string;
  subtitle: string;
  description: string;
  technologies: string[];
  image: string;
  category: string;
  demoLink?: string;
  githubLink?: string;
}

@Component({
  selector: 'app-portfolio',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './portfolio.component.html',
  styleUrl: './portfolio.component.css'
})
export class PortfolioComponent implements OnInit {
  isProjectsVisible = false;
  selectedProject: Project | null = null;
  showModal = false;

  projects: Project[] = [
    {
      id: 1,
      title: 'E-Commerce UI',
      subtitle: 'Angular v17',
      description: 'Angular-based storefront with lazy loading and API integration. Full-featured shopping cart, product filtering, and checkout system with responsive design.',
      technologies: ['Angular', 'TypeScript', 'RxJS', 'REST API'],
      image: './project1.jpg',
      category: 'Web Application',
      demoLink: 'https://demo.com',
      githubLink: 'https://github.com/yourusername/ecommerce'
    },
    {
      id: 2,
      title: 'View Cast',
      subtitle: 'FrontEnd By Bootstrap Application',
      description: 'Modern blogging platform with real-time markdown editor, user authentication, and content management system. Built with Angular frontend and .NET Core backend.',
      technologies: ['Angular', '.NET Core', 'SQL Server', 'SignalR'],
      image: './viewCast.png',
      category: 'Full Stack',
      githubLink: 'https://github.com/yourusername/blog'
    },
    {
      id: 3,
      title: 'Connect4 Game',
      subtitle: 'Win Forms',
      description: 'Real-time weather application with location-based forecasts, interactive maps, and detailed weather analytics. Clean UI with smooth animations.',
      technologies: ['Win Forms',  'C#'],
      image: './con4.png',
      category: 'Web Application',
      demoLink: 'https://weather-demo.com'
    },
    {
      id: 4,
      title: 'Chat App',
      subtitle: 'Real-time Communication',
      description: 'Real-time chat application with private messaging, group chats, file sharing, and emoji support. Built with SignalR for instant communication.',
      technologies: ['Angular', '.NET Core', 'SignalR', 'SQL Server'],
      image: './chat.png',
      category: 'Real-time App',
      githubLink: 'https://github.com/yourusername/chat'
    },
    {
      id: 5,
      title: 'Learning Platform',
      subtitle: 'Educational System',
      description: 'Comprehensive e-learning platform with video courses, quizzes, progress tracking, and certification system. Admin dashboard for content management.',
      technologies: ['Angular', 'ASP.NET Core', 'Entity Framework', 'Azure'],
      image: './e.png',
      category: 'Education',
      demoLink: 'https://learning-demo.com'
    },
    {
      id: 6,
      title: 'Project Tracker',
      subtitle: 'Task Management',
      description: 'Agile project management tool with kanban boards, sprint planning, time tracking, and team collaboration features. Perfect for development teams.',
      technologies: ['Angular', '.NET Core', 'PostgreSQL', 'Docker'],
      image: './agile.png',
      category: 'Productivity',
      githubLink: 'https://github.com/yourusername/tracker'
    }
  ];

  @HostListener('window:scroll', [])
  onWindowScroll() {
    this.checkProjectsVisibility();
  }

  ngOnInit() {
    setTimeout(() => {
      this.checkProjectsVisibility();
    }, 100);
  }

  checkProjectsVisibility() {
    const projectsSection = document.querySelector('.portfolio-section');
    if (projectsSection) {
      const rect = projectsSection.getBoundingClientRect();
      const windowHeight = window.innerHeight;
      const isVisible = rect.top < windowHeight * 0.75 && rect.bottom > 0;
      
      if (isVisible && !this.isProjectsVisible) {
        this.isProjectsVisible = true;
      }
    }
  }

  openProjectModal(project: Project) {
    this.selectedProject = project;
    this.showModal = true;
    document.body.style.overflow = 'hidden';
  }

  closeModal() {
    this.showModal = false;
    this.selectedProject = null;
    document.body.style.overflow = 'auto';
  }
}
