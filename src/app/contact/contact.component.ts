import { Component, OnInit, HostListener } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

interface ContactLink {
  icon: string;
  title: string;
  value: string;
  link: string;
  color: string;
}

interface ContactForm {
  name: string;
  email: string;
  subject: string;
  message: string;
}

@Component({
  selector: 'app-contact',
  standalone: true,
  imports: [CommonModule, FormsModule],
  templateUrl: './contact.component.html',
  styleUrl: './contact.component.css'
})
export class ContactComponent implements OnInit {
  isTitleVisible = false;
  isCardsVisible = false;
  isFormVisible = false;

  formData: ContactForm = {
    name: '',
    email: '',
    subject: '',
    message: ''
  };

  contactLinks: ContactLink[] = [
    {
      icon: 'bi-envelope-fill',
      title: 'Email',
      value: 'alsaidm508@gmail.com',
      link: 'alsaidm508@gmail.com',
      color: '#bb86fc'
    },
    {
      icon: 'bi-github',
      title: 'GitHub',
      value: 'Mohamed El Sayed',
      link: 'https://github.com/MohamedSayed24',
      color: '#bb86fc'
    },
    {
      icon: 'bi-linkedin',
      title: 'LinkedIn',
      value: 'Mohamed El Sayed',
      link: 'https://www.linkedin.com/in/mohamed-el-sayed-414089222/',
      color: '#bb86fc'
    },
    {
      icon: 'bi-twitter',
      title: 'Twitter',
      value: 'Mohamed El Sayed',
      link: 'https://twitter.com/yourusername',
      color: '#bb86fc'
    }
  ];

  @HostListener('window:scroll', [])
  onWindowScroll() {
    this.checkVisibility();
  }

  ngOnInit() {
    setTimeout(() => {
      this.checkVisibility();
    }, 100);
  }

  checkVisibility() {
    const contactSection = document.querySelector('.contact-section');
    if (contactSection) {
      const rect = contactSection.getBoundingClientRect();
      const windowHeight = window.innerHeight;
      
      if (rect.top < windowHeight * 0.8) {
        this.isTitleVisible = true;
        
        setTimeout(() => {
          this.isCardsVisible = true;
        }, 200);
        
        setTimeout(() => {
          this.isFormVisible = true;
        }, 400);
      }
    }
  }

  onSubmit() {
    if (this.formData.name && this.formData.email && this.formData.message) {
      console.log('Form submitted:', this.formData);
      // Add your form submission logic here
      alert('Message sent successfully!');
      this.resetForm();
    } else {
      alert('Please fill in all required fields');
    }
  }

  resetForm() {
    this.formData = {
      name: '',
      email: '',
      subject: '',
      message: ''
    };
  }
}
