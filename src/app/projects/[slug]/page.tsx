import React from 'react';
import ProjectContent from '@/components/projects/ProjectContent';
import type { Project } from '@/components/projects/ProjectCard';

// This would typically come from a CMS or API
const projects: Record<string, Project & { content: string }> = {
  'portfolio-website': {
    title: 'Portfolio Website',
    description:
      'A modern portfolio website built with Next.js and TailwindCSS',
    technologies: ['Next.js', 'React', 'TypeScript', 'TailwindCSS'],
    image: 'https://placehold.co/800x400/e2e8f0/1e293b?text=Portfolio+Website',
    content: `# Portfolio Website

## Overview

A modern, responsive portfolio website built to showcase my work and skills. The site features a clean design, smooth animations, and a great user experience across all devices.

## Technical Details

### Frontend Stack
- **Next.js 14**: For server-side rendering and optimal performance
- **React**: For building the user interface
- **TypeScript**: For type safety and better developer experience
- **TailwindCSS**: For styling and responsive design
- **Framer Motion**: For smooth page transitions and animations

### Key Features
1. Responsive Design
2. Dark/Light Mode
3. Blog System with Markdown Support
4. Project Showcase
5. Contact Form
6. SEO Optimization

### Performance Optimizations
- Image optimization with Next.js Image component
- Code splitting and lazy loading
- Static page generation where possible
- Efficient styling with TailwindCSS

## Development Process

The development process followed these key steps:

1. **Planning & Design**
   - Wireframing
   - Component Structure
   - Responsive Design Planning

2. **Implementation**
   - Setting up Next.js project
   - Implementing core components
   - Adding animations and transitions
   - Integrating blog system

3. **Testing & Optimization**
   - Performance testing
   - Cross-browser testing
   - Mobile responsiveness
   - Accessibility checks

## Challenges & Solutions

### Challenge 1: Performance
- Implemented image optimization
- Used code splitting
- Optimized font loading

### Challenge 2: Responsive Design
- Used TailwindCSS breakpoints
- Implemented mobile-first approach
- Tested on multiple devices

## Future Improvements

1. Add more interactive elements
2. Implement advanced animations
3. Add more project details
4. Enhance blog features`,
  },
  'task-management-application': {
    title: 'Task Management Application',
    description:
      'A full-stack task management application with real-time updates',
    technologies: ['React', 'Node.js', 'MongoDB', 'Socket.IO'],
    image:
      'https://placehold.co/800x400/e2e8f0/1e293b?text=Task+Management+App',
    content: `# Task Management Application

## Overview

A comprehensive task management solution that helps teams collaborate effectively. The application features real-time updates, task assignments, and progress tracking.

## Technical Stack

### Frontend
- React with TypeScript
- Redux for state management
- Material-UI components
- Socket.IO client

### Backend
- Node.js with Express
- MongoDB for data storage
- Socket.IO for real-time updates
- JWT authentication

## Key Features

1. **Real-time Updates**
   - Live task status changes
   - Instant notifications
   - Collaborative editing

2. **Task Management**
   - Create and assign tasks
   - Set priorities and deadlines
   - Track progress
   - Add comments and attachments

3. **User Management**
   - Role-based access control
   - Team management
   - User profiles

4. **Analytics**
   - Task completion metrics
   - Team performance analytics
   - Time tracking

## Implementation Details

### Database Schema
\`\`\`typescript
interface Task {
  id: string;
  title: string;
  description: string;
  status: 'todo' | 'in-progress' | 'completed';
  assignee: string;
  dueDate: Date;
  priority: 'low' | 'medium' | 'high';
  comments: Comment[];
  attachments: Attachment[];
}

interface User {
  id: string;
  name: string;
  email: string;
  role: 'admin' | 'manager' | 'member';
  teams: string[];
}
\`\`\`

### API Architecture
- RESTful endpoints for CRUD operations
- WebSocket connections for real-time updates
- JWT middleware for authentication
- Rate limiting and security measures

## Development Process

1. **Planning Phase**
   - Requirements gathering
   - Architecture design
   - Technology selection

2. **Implementation**
   - Database setup
   - API development
   - Frontend implementation
   - Real-time features

3. **Testing**
   - Unit tests
   - Integration tests
   - Performance testing
   - User acceptance testing

## Challenges & Solutions

### Challenge: Real-time Performance
- Implemented efficient WebSocket connections
- Optimized database queries
- Used caching strategies

### Challenge: Data Consistency
- Implemented optimistic updates
- Added conflict resolution
- Used transactions for critical operations

## Future Enhancements

1. Mobile application
2. Advanced reporting
3. Integration with other tools
4. AI-powered task suggestions`,
  },
  'e-commerce-platform': {
    title: 'E-commerce Platform',
    description: 'A modern e-commerce platform with advanced features',
    technologies: ['Next.js', 'Node.js', 'PostgreSQL', 'Stripe'],
    image:
      'https://placehold.co/800x400/e2e8f0/1e293b?text=E-commerce+Platform',
    content: `# E-commerce Platform

## Overview

A full-featured e-commerce platform built with modern technologies. The platform provides a seamless shopping experience with advanced features like real-time inventory management and secure payments.

## Technical Stack

### Frontend
- Next.js for SSR and static generation
- React for UI components
- TailwindCSS for styling
- Redux for state management

### Backend
- Node.js with Express
- PostgreSQL database
- Stripe for payments
- Redis for caching

## Key Features

1. **Product Management**
   - Category organization
   - Inventory tracking
   - Price management
   - Product variants

2. **Shopping Experience**
   - Advanced search
   - Filtering options
   - Wishlist
   - Shopping cart
   - Secure checkout

3. **User Features**
   - User accounts
   - Order history
   - Saved addresses
   - Payment methods

4. **Admin Dashboard**
   - Sales analytics
   - Inventory management
   - Order processing
   - Customer management

## Implementation Details

### Database Schema
\`\`\`typescript
interface Product {
  id: string;
  name: string;
  description: string;
  price: number;
  categories: string[];
  variants: ProductVariant[];
  inventory: number;
  images: string[];
}

interface Order {
  id: string;
  userId: string;
  items: OrderItem[];
  status: OrderStatus;
  shippingAddress: Address;
  paymentDetails: PaymentInfo;
}
\`\`\`

### Architecture
- Microservices architecture
- Event-driven design
- CQRS pattern
- Caching strategy

## Development Process

1. **Planning**
   - Market research
   - Feature prioritization
   - Architecture design

2. **Implementation**
   - Database design
   - API development
   - Frontend development
   - Payment integration

3. **Testing**
   - Unit testing
   - Integration testing
   - Performance testing
   - Security auditing

## Challenges & Solutions

### Challenge: Performance
- Implemented caching
- Used CDN for assets
- Optimized database queries

### Challenge: Security
- PCI compliance
- Data encryption
- Secure authentication
- Regular security audits

## Future Enhancements

1. Mobile application
2. AI-powered recommendations
3. Advanced analytics
4. International shipping
5. Multiple payment methods`,
  },
};

interface PageProps {
  params: {
    slug: string;
  };
}

export default function ProjectPage({ params }: PageProps) {
  const project = projects[params.slug];

  if (!project) {
    return (
      <div className="text-center">
        <h1 className="text-2xl font-bold">Project not found</h1>
      </div>
    );
  }

  return <ProjectContent project={project} />;
}
