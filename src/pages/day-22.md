---
title: "Micro-services vs Monolithic"
day: "22"
publishDate: "2020-08-30"
thumbnailImage: "../images/day-22.png"
shareText: "Day 22/100: Micro-services vs Monolithic."
hashtags: ["100DaysOfCode",'zookeeper','microservices' ,'react', 'kafka', 'dockerswarm', 'Monolithic', 'eventbus', 'async', 'docker']
draft: false
---

# Micro-services vs Monolithic.

## **Day 22/100: Micro-services vs Monolithic**.

The 22nd was focused on research and documentation, I was reading and watching some videos about the micro-services architecture. The topic of distributed systems is the main base of all these technologies, it is advisable to have some knowledge about distributed systems before continuing this journey, since you will come across a whole distributed ecosystem in a symbiotic relationship.
* **Microservices vs Monolithic**: Comparison between advantages and disadvantages.
* **Containers in Docker vs. VM**: Comparison between advantages and disadvantages. Many people often confuse these terms and their application.

As I researched, I came to understand the close relationship that exists between various distributed system technologies, such as Zookeeper, Kafka, Kubernetes, and Docker. For this reason, I'm going to take some time with each of these technologies to get an idea of ​​what they do. Starting with the relationship between Docker and Kubernetes.

### Docker:
This tool allows me to handle process containers, it is much more efficient for certain applications than virtual machines, since it allows me to have containers with specific applications with a very small size and it does not implement all the hardware simulation paraphernalia of a virtual machine. Anyone who knows a little about Linux operating system design will find many similarities to the core idea of ​​containers and the way Linux relates its kernel to the applications that are installed on the operating system. Another highlight in Docker is the management of the internal network between the containers and the external mapping with the host network.

#### Docker Swarm:
From what I understand it is a Docker own solution for container orchestration. In this field, Kubernetes is very popular, which from what I have been able to understand is a more popular solution than Swarm. At the moment I am inclined to focus on Kubernetes for these types of solutions. Component orchestration is the relationship that Docker and Kubernetes have.

#### **Recommended book**:

Docker in Action by Jeff Nickoloff, I find this book very practical to get started with Docker. It seeks to explain essential functionalities outside of the version of Docker you are using. I currently have version 19 installed on my machine and this book has served me quite well.

#### **Videos**:

[FreeCodeCamp Docker in two hours] (https://youtu.be/fqMOX6JJhGo)

[Spanish Docker Course] (https://youtu.be/1LRzlUoyZg4)


#### **Event bus** (intro to Kafka):

At the end of the research on Dockers I continued working with the small application Blog with micro-services, I am working to understand the foundations of this architecture. After finishing a simple client with react, we started implementing an Events Bus for asynchronous communication of my posts and comments services. Here from what Apache Kafka could understand in a real application would be the technology to implement this concept, along with Kafka comes its symbiotic relationship with Apache Zookeeper. Then I will try to implement my Event Bus with these technologies.  

## Repos:
* [Comment microservice with Node and Express](https://github.com/difo23/commentsmicroservice)  
* [Post microservice with Node and Express](https://github.com/difo23/postmicroservice)  
* [Client With react](https://github.com/difo23/clientblogs)  