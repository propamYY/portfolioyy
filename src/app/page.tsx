'use client';

import { motion } from "framer-motion";
import { FaGithub, FaLinkedin } from "react-icons/fa";
import Image from "next/image";

export default function Home() {
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        delayChildren: 0.3,
        staggerChildren: 0.2
      }
    }
  };

  const itemVariants = {
    hidden: { y: 20, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1
    }
  };

  return (
    <main className="min-h-screen">
      {/* ForteBank Internship Section */}
      <section className="relative py-32 bg-gradient-to-b from-[#1a1a1a] to-[#2a2a2a] overflow-hidden">
        {/* Animated background */}
        <div className="absolute inset-0 opacity-10">
          <div className="absolute inset-0 animate-wave bg-[linear-gradient(45deg,transparent_25%,rgba(255,255,255,0.1)_50%,transparent_75%)]"></div>
        </div>

        <div className="container-custom relative z-10">
          <div className="flex flex-col items-center mb-16">
            <div className="relative w-64 h-20 mb-8">
              <Image
                src="/portfolioyy/forte.svg"
                alt="ForteBank Logo"
                fill
                className="object-contain"
                priority
              />
            </div>
            <h2 className="text-4xl md:text-5xl font-bold text-white mb-4">Ернур Еламан</h2>
            <p className="text-xl text-white/80 text-center max-w-2xl">
              Frontend Developer
            </p>
          </div>

          <div className="max-w-4xl mx-auto">
            <div className="card p-8 mb-12 bg-white/5 backdrop-blur-sm border border-white/10">
              <h3 className="text-2xl font-semibold mb-6 text-white">Motivational Letter</h3>
              <div className="space-y-4 text-lg text-white/90">
                <p>
                  Уважаемая команда ForteBank,
                </p>
                <p>
                  Меня зовут Ернур Еламан, я являюсь выпускником Astana IT University 2024 года по специальности CyberSecurity. 
                  С университетских времён меня увлекала фронтенд-разработка. Мой путь начался с HTML и CSS, а затем, обучаясь 
                  Web Development, я освоил JavaScript.
                </p>
                <p>
                  После успешной защиты диплома я решил уделять больше времени разработке. За это время я начал работать, 
                  создавать пет-проекты, выполнять фриланс-заказы и продолжать углублять свои знания в фронтенд-разработке. 
                  Среди моих проектов — Telegram-боты, один из которых используется всей компанией уже около 9 месяцев. Также 
                  я запустил сайт для дочерней компании SvoyDom на React.js, который стабильно используется в компании по сей день.
                </p>
                <p>
                  Я создавал CRM-систему для спортивных залов, турнирную платформу для проведения спортивных соревнований и 
                  LMS-систему для загрузки и изучения курсов. Эти проекты позволили мне развить навыки в веб-разработке и 
                  работе с различными технологиями.
                </p>
                <p>
                  Для меня стажировка в ForteBank — это отличная возможность для карьерного роста и профессионального развития, 
                  а также шанс стать частью успешной и прогрессивной команды. Я готов учиться, совершенствоваться и развиваться, 
                  ведь именно это, по моему мнению, помогает двигаться вперёд в сфере IT. Я уверен, что стажировка в ForteBank 
                  станет важным этапом в моей карьере, и буду рад продолжить свой путь в вашей компании после её завершения.
                </p>
                <p>
                  Кроме того, у меня есть опыт работы с PHP (Laravel), Python (FastAPI, Aiogram), Docker, Postman, Git и RestAPI, 
                  что позволяет мне эффективно решать задачи разработки и работы с API.
                </p>
                <p>
                  Спасибо за внимание к моей кандидатуре. Я буду рад возможности пройти стажировку в вашей команде и внести 
                  свой вклад в её развитие.
                </p>
                <p>
                  С уважением,<br />
                  Ернур Еламан
                </p>
              </div>
            </div>

            <div className="flex flex-col md:flex-row justify-center gap-6">
              <a 
                href="#about" 
                className="btn-primary group bg-white text-black hover:bg-white/90"
              >
                <span className="relative z-10 group-hover:text-white transition-colors duration-300">Обо мне</span>
                <div className="absolute inset-0 bg-black transform scale-x-0 group-hover:scale-x-100 transition-transform origin-left duration-300"></div>
              </a>
              <a 
                href="#skills" 
                className="btn-primary group bg-white text-black hover:bg-white/90"
              >
                <span className="relative z-10 group-hover:text-white transition-colors duration-300">Мой Стек</span>
                <div className="absolute inset-0 bg-black transform scale-x-0 group-hover:scale-x-100 transition-transform origin-left duration-300"></div>
              </a>
              <a 
                href="#projects" 
                className="btn-primary group bg-white text-black hover:bg-white/90"
              >
                <span className="relative z-10 group-hover:text-white transition-colors duration-300">Мои проекты</span>
                <div className="absolute inset-0 bg-black transform scale-x-0 group-hover:scale-x-100 transition-transform origin-left duration-300"></div>
              </a>
              <a 
                href="#contact" 
                className="btn-primary group bg-white text-black hover:bg-white/90"
              >
                <span className="relative z-10 group-hover:text-white transition-colors duration-300">Связаться со мной</span>
                <div className="absolute inset-0 bg-black transform scale-x-0 group-hover:scale-x-100 transition-transform origin-left duration-300"></div>
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* Hero Section */}
      <section className="relative h-screen flex items-center justify-center overflow-hidden">
        {/* Animated background */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 1.5 }}
          className="absolute inset-0 bg-gradient-to-br from-white via-gray-50 to-white"
        >
          <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,rgba(0,0,0,0.05)_0%,transparent_50%)] animate-pulse-slow"></div>
          <div className="absolute inset-0 bg-[linear-gradient(45deg,transparent_25%,rgba(0,0,0,0.03)_50%,transparent_75%)] animate-wave"></div>
          <div className="absolute inset-0 bg-[linear-gradient(90deg,transparent_0%,rgba(0,0,0,0.02)_50%,transparent_100%)] animate-shimmer"></div>
        </motion.div>

        <motion.div
          variants={containerVariants}
          initial="hidden"
          animate="visible"
          className="relative z-10 text-center px-4"
        >
          <motion.div
            variants={itemVariants}
            className="mb-8"
          >
            <div className="relative w-40 h-40 mx-auto mb-6 rounded-full overflow-hidden border-4 border-gray-200 shadow-2xl animate-float">
              <Image
                src="/portfolioyy/portfolio.JPG"
                alt="Yernur Yelaman"
                fill
                sizes="160px"
                quality={100}
                loading="eager"
                style={{ 
                  objectFit: 'cover',
                  objectPosition: 'center 25%',
                  transform: 'scale(1.2)',
                  imageRendering: 'crisp-edges'
                }}
                className="hover:scale-110 transition-transform duration-500"
                priority
                unoptimized
              />
            </div>
          </motion.div>

          <motion.h2
            variants={itemVariants}
            className="text-gray-800 text-xl md:text-2xl mb-4 font-light tracking-wider"
          >
            Hi, I'm
          </motion.h2>

          <motion.div
            variants={itemVariants}
            className="overflow-hidden px-4 md:px-8"
          >
            <motion.h1 
              className="text-5xl md:text-7xl font-bold mb-4 text-gray-900 animate-glow"
              style={{ 
                transformOrigin: 'center',
                display: 'inline-block',
                textShadow: '0 0 10px rgba(0,0,0,0.1)'
              }}
            >
              Yernur Yelaman
            </motion.h1>
          </motion.div>

          <motion.div
            variants={itemVariants}
            className="relative inline-block mb-8"
          >
            <span className="text-xl md:text-2xl text-gray-700 font-medium">
              Frontend Developer
            </span>
            <motion.div
              initial={{ width: 0 }}
              animate={{ width: "100%" }}
              transition={{ delay: 1, duration: 0.8 }}
              className="absolute bottom-0 left-0 h-0.5 bg-gradient-to-r from-transparent via-gray-300 to-transparent"
            />
          </motion.div>

          <motion.div
            variants={itemVariants}
            className="flex justify-center gap-4"
          >
            <a href="#contact" className="btn-primary group">
              <span className="relative z-10">Связаться</span>
              <div className="absolute inset-0 bg-white/10 transform scale-x-0 group-hover:scale-x-100 transition-transform origin-left duration-300"></div>
            </a>
            <a href="#projects" className="btn-secondary group">
              <span className="relative z-10 group-hover:text-gray-900 transition-colors duration-300">Проекты</span>
            </a>
          </motion.div>
        </motion.div>
      </section>

      {/* About Section */}
      <section id="about" className="py-20 container-custom">
        <h2 className="section-title text-gradient">Обо мне</h2>
        <div className="grid md:grid-cols-2 gap-8 items-center mb-12">
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5 }}
            viewport={{ once: true }}
            className="card"
          >
            <p className="text-lg mb-4">
            Привет! Меня зовут Ернур, я фронтенд-разработчик и работаю с React.js. Люблю создавать удобные и современные веб-приложения, которые действительно помогают людям и бизнесу.

У меня есть опыт разработки CRM-систем, платформ для соревнований, LMS, а также Telegram-ботов, которые используют целые команды. Постоянно учусь новому и стараюсь делать интерфейсы не только красивыми, но и удобными.

Мне важно, чтобы продукт был полезным и работал стабильно в продакшене.
            </p>
          </motion.div>
          <motion.div
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5 }}
            viewport={{ once: true }}
            className="flex justify-center items-center"
          >
            <div className="relative w-72 h-72 overflow-hidden rounded-full shadow-2xl border-4 border-white">
              <Image
                src="/portfolioyy/portfolio.JPG"
                alt="Yernur Yelaman - Frontend Developer"
                fill
                sizes="(max-width: 768px) 100vw, 288px"
                quality={100}
                loading="eager"
                priority
                style={{ 
                  objectFit: 'cover',
                  objectPosition: 'center 25%',
                  transform: 'scale(1.1)',
                  imageRendering: 'crisp-edges'
                }}
                className="hover:scale-110 transition-transform duration-500"
                unoptimized
              />
            </div>
          </motion.div>
        </div>

        {/* Kazakhstan Section */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          viewport={{ once: true }}
          className="relative h-[400px] rounded-2xl overflow-hidden shadow-2xl mb-12"
        >
          <Image
            src="/portfolioyy/kazakhstan.jpg"
            alt="Beautiful view of Kazakhstan"
            fill
            sizes="(max-width: 1280px) 100vw, 1280px"
            quality={100}
            loading="eager"
            priority
            style={{ 
              objectFit: 'cover',
              objectPosition: 'center',
              transform: 'scale(1.05)',
              imageRendering: 'crisp-edges'
            }}
            className="hover:scale-105 transition-transform duration-700"
            unoptimized
          />
          <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent flex items-end p-8">
            <div className="text-white max-w-2xl">
              <h3 className="text-2xl font-semibold mb-2">From the Heart of Eurasia</h3>
              <p className="text-lg text-white/90">
                Я родился в самом сердце Евразии — в столице Казахстана, городе Астана. Здесь я сделал свои первые шаги, 
                пошёл в школу, впервые влюбился, окончил университет и именно отсюда мечтаю продолжить свой путь в IT, 
                попав на стажировку в <span className="text-transparent bg-clip-text bg-gradient-to-r from-white via-blue-400 to-white font-semibold animate-pulse">ForteBank</span> ❤️
              </p>
            </div>
          </div>
        </motion.div>

        {/* Football Section
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          viewport={{ once: true }}
          className="grid md:grid-cols-2 gap-8 items-center"
        >
          <div className="relative h-[300px] rounded-2xl overflow-hidden shadow-2xl">
            <Image
              src="/Chelsea_FC.svg.png"
              alt="Chelsea FC Logo"
              fill
              sizes="(max-width: 768px) 100vw, 50vw"
              quality={100}
              loading="eager"
              style={{ 
                objectFit: 'contain',
                imageRendering: 'crisp-edges',
                padding: '2rem',
                background: 'linear-gradient(to right bottom, #034694, #000046)'
              }}
              className="hover:scale-105 transition-transform duration-700"
              unoptimized
            />
          </div>
          <div className="card">
            <h3 className="text-2xl font-semibold mb-4 text-gradient">Professional Football Background</h3>
            <p className="text-lg mb-4">
              My journey in technology was preceded by a passionate dedication to sports. From an early age until 16, 
              I pursued professional football, developing discipline, teamwork, and leadership skills that I now apply 
              to my development work.
            </p>
            <p className="text-lg">
              As a lifelong Chelsea FC supporter, I've learned the importance of persistence, strategic thinking, and 
              adaptability - qualities that are equally valuable in both football and software development. The club's 
              motto "The pride of London" resonates with my approach to creating elegant and powerful web solutions.
            </p>
          </div>
        </motion.div> */}

        {/* Education Section */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          viewport={{ once: true }}
          className="mt-12 grid md:grid-cols-2 gap-8 items-center"
        >
          <div className="card order-2 md:order-1">
            <h3 className="text-2xl font-semibold mb-4 text-gradient">Университет</h3>
            <p className="text-lg mb-4">
              В 2021 году, после окончания школы, я поступил на грант в Astana IT University по специальности «Кибербезопасность». Учёба была интересной и дала мне хорошую техническую базу, но в душе меня всегда тянуло к веб-разработке. Именно там я начал свой путь во frontend, а в 2024 году успешно окончил университет. Это были насыщенные и классные годы, которые только укрепили мою уверенность в выборе направления.
            </p>
           
            <div className="mt-6 flex flex-wrap gap-3">
              <span className="px-3 py-1 bg-primary/10 text-primary rounded-full text-sm">Cybersecurity</span>
              <span className="px-3 py-1 bg-primary/10 text-primary rounded-full text-sm">Frontend Development</span>
              <span className="px-3 py-1 bg-primary/10 text-primary rounded-full text-sm">React & Next.js</span>
            </div>
          </div>
          <div className="relative h-[400px] rounded-2xl overflow-hidden shadow-2xl order-1 md:order-2">
            <Image
              src="/portfolioyy/DSC08375-copy-scaled.jpg"
              alt="Astana IT University"
              fill
              sizes="(max-width: 768px) 100vw, 50vw"
              quality={100}
              loading="eager"
              style={{ 
                objectFit: 'cover',
                imageRendering: 'crisp-edges'
              }}
              className="hover:scale-105 transition-transform duration-700"
              unoptimized
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent flex items-end p-8">
              <div className="text-white">
                <h4 className="text-xl font-semibold">Astana IT University</h4>
                <p className="text-white/90">Class of 2024</p>
              </div>
            </div>
          </div>
        </motion.div>
      </section>

      {/* Timeline Section */}
      <section className="py-20 relative overflow-hidden">
        {/* Background Animation */}
        <div className="absolute inset-0 bg-gradient-to-b from-gray-50/50 to-white">
          <div className="absolute inset-0 opacity-20">
            <div className="absolute inset-0 animate-wave bg-[linear-gradient(45deg,transparent_25%,rgba(68,51,122,0.1)_50%,transparent_75%)]"></div>
          </div>
        </div>

        <div className="container-custom relative z-10">
          <h2 className="section-title text-gradient mb-16 text-center">Мой путь в разработке</h2>
          
          <div className="relative">
            {/* Horizontal Line with Gradient */}
            <div className="absolute top-12 left-0 right-0 h-1 bg-gradient-to-r from-primary via-secondary to-primary rounded-full"></div>
            
            {/* Timeline Items */}
            <div className="grid grid-cols-1 md:grid-cols-4 gap-4">
              {[
                {
                  year: "2022",
                  title: "Первые шаги",
                  description: "Начал изучать HTML и CSS",
                  skills: ["HTML", "CSS"]
                },
                {
                  year: "2023",
                  title: "JavaScript",
                  description: "Освоил основы JavaScript и современные практики",
                  skills: ["JavaScript", "ES6+"]
                },
                {
                  year: "2024",
                  title: "React",
                  description: "Изучил React и современные фреймворки",
                  skills: ["React", "Next.js"]
                },
                {
                  year: "2025",
                  title: "Коммерческие проекты",
                  description: "Работа над реальными проектами",
                  skills: ["Full Stack", "Security"]
                }
              ].map((item, index) => (
                <div key={item.year} className="relative pt-8">
                  {/* Dot on Timeline */}
                  <motion.div
                    initial={{ scale: 0 }}
                    whileInView={{ scale: 1 }}
                    transition={{ duration: 0.5, delay: index * 0.1 }}
                    viewport={{ once: true }}
                    className="absolute top-[3.25rem] left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-6 h-6 bg-white rounded-full border-4 border-primary shadow-lg z-10"
                  >
                    <div className="absolute inset-0 bg-primary/20 rounded-full animate-ping"></div>
                  </motion.div>

                  {/* Year Badge */}
                  <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.5, delay: index * 0.1 }}
                    viewport={{ once: true }}
                    className="absolute top-0 left-1/2 transform -translate-x-1/2 bg-gradient-to-r from-primary to-secondary text-white px-4 py-1 rounded-full text-sm shadow-lg"
                  >
                    {item.year}
                  </motion.div>

                  {/* Content Card */}
                  <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.5, delay: index * 0.1 + 0.2 }}
                    viewport={{ once: true }}
                    className="mt-8 card group hover:shadow-lg transition-all duration-300 p-4"
                  >
                    <h3 className="text-lg font-semibold mb-2 text-gradient">{item.title}</h3>
                    <p className="text-sm text-gray-600 mb-3 line-clamp-2">{item.description}</p>
                    <div className="flex flex-wrap gap-1">
                      {item.skills.map((skill, skillIndex) => (
                        <span
                          key={skillIndex}
                          className="px-2 py-0.5 bg-primary/5 text-primary rounded-full text-xs
                                   transform transition-all duration-300
                                   group-hover:scale-105 group-hover:bg-primary/10"
                        >
                          {skill}
                        </span>
                      ))}
                    </div>
                  </motion.div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Skills Section */}
      <section id="skills" className="py-20 relative overflow-hidden">
        {/* Background Animation */}
        <div className="absolute inset-0 bg-gradient-to-b from-gray-50 to-white">
          <div className="absolute inset-0 opacity-20">
            <div className="absolute inset-0 animate-wave bg-[linear-gradient(45deg,transparent_25%,rgba(68,51,122,0.1)_50%,transparent_75%)]"></div>
          </div>
        </div>

        <div className="container-custom relative z-10">
          <h2 className="section-title text-gradient mb-16">Мой стек технологий</h2>
          
          {/* Main Technologies */}
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8 mb-16">
            {[
              { name: "React", level: "Продвинутый", years: "2+ года" },
              { name: "Next.js", level: "Продвинутый", years: "1+ год" },
              { name: "TypeScript", level: "Средний", years: "1+ год" },
              { name: "Tailwind CSS", level: "Продвинутый", years: "2+ года" }
            ].map((tech, index) => (
              <motion.div
                key={tech.name}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                viewport={{ once: true }}
                className="group"
              >
                <div className="skill-card transform transition-all duration-300 hover:scale-105 hover:-rotate-2">
                  <div className="relative z-10">
                    <h3 className="text-xl font-semibold mb-2">{tech.name}</h3>
                    <div className="flex flex-col gap-2">
                      <div className="w-full h-2 bg-gray-200 rounded-full overflow-hidden">
                        <motion.div
                          initial={{ width: 0 }}
                          whileInView={{ width: "95%" }}
                          transition={{ duration: 1, delay: 0.5 }}
                          className="h-full bg-gradient-to-r from-primary to-secondary"
                        />
                      </div>
                      <span className="text-sm text-gray-600">{tech.level}</span>
                      <span className="text-xs text-primary/60">{tech.years}</span>
                    </div>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>

          {/* Additional Skills */}
          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-4">
            {[
              "HTML5", "CSS3", "JavaScript", "ES6+", "Git", "GitHub",
              "REST API", "Postman", "Docker", "PHP", "Python", "FastAPI"
            ].map((skill, index) => (
              <motion.div
                key={skill}
                initial={{ opacity: 0, scale: 0.8 }}
                whileInView={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.3, delay: index * 0.05 }}
                viewport={{ once: true }}
                className="group"
              >
                <div className="px-4 py-2 rounded-full bg-white border border-gray-200 shadow-sm 
                             transform transition-all duration-300 hover:scale-110 hover:shadow-lg
                             hover:border-primary/20 hover:bg-gradient-to-r hover:from-primary/5 hover:to-secondary/5">
                  <span className="text-sm font-medium text-gray-700 group-hover:text-primary">{skill}</span>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Projects Section */}
      <section id="projects" className="py-20 container-custom">
        <h2 className="section-title text-gradient">Мои проекты</h2>
        <div className="grid md:grid-cols-2 gap-8">
          {/* Oku LMS Project */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            viewport={{ once: true }}
            className="project-card"
          >
            <div className="relative h-48 overflow-hidden">
              <Image
                src="/portfolioyy/oku_lms.png"
                alt="Oku LMS Project"
                fill
                sizes="(max-width: 768px) 100vw, 50vw"
                quality={100}
                loading="eager"
                style={{ 
                  objectFit: 'cover',
                  imageRendering: 'crisp-edges'
                }}
                className="hover:scale-105 transition-transform duration-700"
                unoptimized
              />
              <div className="absolute inset-0 flex items-center justify-center">
                <span className="px-3 py-1 text-sm bg-primary/10 rounded-full text-primary">Закрытый репозиторий</span>
              </div>
            </div>
            <div className="p-6">
              <div className="flex items-center gap-2 mb-2">
                <h3 className="text-xl font-semibold">Oku LMS</h3>
                <span className="bg-primary/10 text-primary text-xs px-2 py-1 rounded-full">Закрытый</span>
              </div>
              <p className="text-gray-600 mb-4">
                Современная система управления обучением с продвинутыми функциями:
                <ul className="list-disc list-inside mt-2 space-y-1">
                  <li>Интерактивное управление курсами</li>
                  <li>Отслеживание прогресса в реальном времени</li>
                  <li>Расширенная аналитическая панель</li>
                  <li>Безопасная система аутентификации</li>
                  <li>Адаптивный дизайн для всех устройств</li>
                </ul>
              </p>
              <div className="flex flex-wrap gap-2 mb-4">
                <span className="px-2 py-1 bg-gray-100 text-sm rounded">Next.js</span>
                <span className="px-2 py-1 bg-gray-100 text-sm rounded">TypeScript</span>
                <span className="px-2 py-1 bg-gray-100 text-sm rounded">Tailwind CSS</span>
                <span className="px-2 py-1 bg-gray-100 text-sm rounded">Prisma</span>
                <span className="px-2 py-1 bg-gray-100 text-sm rounded">PostgreSQL</span>
              </div>
              <div className="flex gap-4">
                <button 
                  className="text-primary hover:underline flex items-center gap-2 group"
                  onClick={() => {/* Add modal or dialog to show detailed info */}}
                >
                  <span>Подробнее</span>
                  <svg 
                    className="w-4 h-4 transform group-hover:translate-x-1 transition-transform" 
                    fill="none" 
                    viewBox="0 0 24 24" 
                    stroke="currentColor"
                  >
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                  </svg>
                </button>
                <a 
                  href="https://github.com/propamYY/oku_lms_" 
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-primary hover:underline flex items-center gap-2"
                >
                  <span>GitHub</span>
                  <svg 
                    className="w-4 h-4" 
                    fill="currentColor" 
                    viewBox="0 0 24 24"
                  >
                    <path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z"/>
                  </svg>
                </a>
              </div>
            </div>
          </motion.div>

          {/* KK Front Project */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.1 }}
            viewport={{ once: true }}
            className="project-card"
          >
            <div className="relative h-48 overflow-hidden">
              <Image
                src="/portfolioyy/kk.png"
                alt="KK Front Project"
                fill
                sizes="(max-width: 768px) 100vw, 50vw"
                quality={100}
                loading="eager"
                style={{ 
                  objectFit: 'cover',
                  imageRendering: 'crisp-edges'
                }}
                className="hover:scale-105 transition-transform duration-700"
                unoptimized
              />
              <div className="absolute inset-0 flex items-center justify-center">
                <span className="px-3 py-1 text-sm bg-primary/10 rounded-full text-primary">Закрытый репозиторий</span>
              </div>
            </div>
            <div className="p-6">
              <div className="flex items-center gap-2 mb-2">
                <h3 className="text-xl font-semibold">KK Front</h3>
                <span className="bg-primary/10 text-primary text-xs px-2 py-1 rounded-full">Закрытый</span>
              </div>
              <p className="text-gray-600 mb-4">
                Современный корпоративный сайт для KK Group с продвинутыми функциями:
                <ul className="list-disc list-inside mt-2 space-y-1">
                  <li>Поддержка нескольких языков (казахский, русский, английский)</li>
                  <li>Интерактивные UI компоненты</li>
                  <li>Адаптивный дизайн для всех устройств</li>
                  <li>Оптимизированная производительность и SEO</li>
                  <li>Современные анимации и переходы</li>
                </ul>
              </p>
              <div className="flex flex-wrap gap-2 mb-4">
                <span className="px-2 py-1 bg-gray-100 text-sm rounded">Next.js</span>
                <span className="px-2 py-1 bg-gray-100 text-sm rounded">TypeScript</span>
                <span className="px-2 py-1 bg-gray-100 text-sm rounded">Tailwind CSS</span>
                <span className="px-2 py-1 bg-gray-100 text-sm rounded">i18next</span>
                <span className="px-2 py-1 bg-gray-100 text-sm rounded">Framer Motion</span>
              </div>
              <div className="flex gap-4">
                <button 
                  className="text-primary hover:underline flex items-center gap-2 group"
                  onClick={() => {/* Add modal or dialog to show detailed info */}}
                >
                  <span>Подробнее</span>
                  <svg 
                    className="w-4 h-4 transform group-hover:translate-x-1 transition-transform" 
                    fill="none" 
                    viewBox="0 0 24 24" 
                    stroke="currentColor"
                  >
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                  </svg>
                </button>
                <a 
                  href="https://github.com/propamYY/kk_front" 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="text-primary hover:underline flex items-center gap-2"
                >
                  <span>GitHub</span>
                  <svg 
                    className="w-4 h-4" 
                    fill="currentColor" 
                    viewBox="0 0 24 24"
                  >
                    <path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z"/>
                  </svg>
                </a>
              </div>
            </div>
          </motion.div>

          {/* Jobam Project */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.2 }}
            viewport={{ once: true }}
            className="project-card"
          >
            <div className="relative h-48 overflow-hidden">
              <Image
                src="/portfolioyy/jbm.png"
                alt="Jobam Project"
                fill
                sizes="(max-width: 768px) 100vw, 50vw"
                quality={100}
                loading="eager"
                style={{ 
                  objectFit: 'cover',
                  imageRendering: 'crisp-edges'
                }}
                className="hover:scale-105 transition-transform duration-700"
                unoptimized
              />
              <div className="absolute inset-0 flex items-center justify-center">
                <span className="px-3 py-1 text-sm bg-primary/10 rounded-full text-primary">Закрытый репозиторий</span>
              </div>
            </div>
            <div className="p-6">
              <div className="flex items-center gap-2 mb-2">
                <h3 className="text-xl font-semibold">Jobam</h3>
                <span className="bg-primary/10 text-primary text-xs px-2 py-1 rounded-full">Закрытый</span>
              </div>
              <p className="text-gray-600 mb-4">
                Современная платформа для поиска работы с продвинутыми функциями:
                <ul className="list-disc list-inside mt-2 space-y-1">
                  <li>Расширенный поиск и фильтрация вакансий</li>
                  <li>Аутентификация и профили пользователей</li>
                  <li>Уведомления в реальном времени</li>
                  <li>Адаптивный дизайн для всех устройств</li>
                  <li>Современный UI/UX с анимациями</li>
                </ul>
              </p>
              <div className="flex flex-wrap gap-2 mb-4">
                <span className="px-2 py-1 bg-gray-100 text-sm rounded">Next.js</span>
                <span className="px-2 py-1 bg-gray-100 text-sm rounded">TypeScript</span>
                <span className="px-2 py-1 bg-gray-100 text-sm rounded">Tailwind CSS</span>
                <span className="px-2 py-1 bg-gray-100 text-sm rounded">Prisma</span>
                <span className="px-2 py-1 bg-gray-100 text-sm rounded">PostgreSQL</span>
              </div>
              <div className="flex gap-4">
                <button 
                  className="text-primary hover:underline flex items-center gap-2 group"
                  onClick={() => {/* Add modal or dialog to show detailed info */}}
                >
                  <span>Подробнее</span>
                  <svg 
                    className="w-4 h-4 transform group-hover:translate-x-1 transition-transform" 
                    fill="none" 
                    viewBox="0 0 24 24" 
                    stroke="currentColor"
                  >
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                  </svg>
                </button>
                <a 
                  href="https://github.com/propamYY/Jobam_Updated" 
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-primary hover:underline flex items-center gap-2"
                >
                  <span>GitHub</span>
                  <svg 
                    className="w-4 h-4" 
                    fill="currentColor" 
                    viewBox="0 0 24 24"
                  >
                    <path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z"/>
                  </svg>
                </a>
              </div>
            </div>
          </motion.div>

          {/* KompKlub Project */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.3 }}
            viewport={{ once: true }}
            className="project-card"
          >
            <div className="relative h-48 overflow-hidden">
              <Image
                src="/portfolioyy/kompklub.png"
                alt="KompKlub Project"
                fill
                sizes="(max-width: 768px) 100vw, 50vw"
                quality={100}
                loading="eager"
                style={{ 
                  objectFit: 'cover',
                  imageRendering: 'crisp-edges'
                }}
                className="hover:scale-105 transition-transform duration-700"
                unoptimized
              />
              <div className="absolute inset-0 flex items-center justify-center">
                <span className="px-3 py-1 text-sm bg-primary/10 rounded-full text-primary">Закрытый репозиторий</span>
              </div>
            </div>
            <div className="p-6">
              <div className="flex items-center gap-2 mb-2">
                <h3 className="text-xl font-semibold">KompKlub</h3>
                <span className="bg-primary/10 text-primary text-xs px-2 py-1 rounded-full">Закрытый</span>
              </div>
              <p className="text-gray-600 mb-4">
                Платформа для игрового клуба с продвинутыми функциями:
                <ul className="list-disc list-inside mt-2 space-y-1">
                  <li>Система управления турнирами</li>
                  <li>Профили пользователей и достижения</li>
                  <li>Чат и уведомления в реальном времени</li>
                  <li>Адаптивный дизайн для всех устройств</li>
                  <li>Современный UI/UX с анимациями</li>
                </ul>
              </p>
              <div className="flex flex-wrap gap-2 mb-4">
                <span className="px-2 py-1 bg-gray-100 text-sm rounded">Next.js</span>
                <span className="px-2 py-1 bg-gray-100 text-sm rounded">TypeScript</span>
                <span className="px-2 py-1 bg-gray-100 text-sm rounded">Tailwind CSS</span>
                <span className="px-2 py-1 bg-gray-100 text-sm rounded">Prisma</span>
                <span className="px-2 py-1 bg-gray-100 text-sm rounded">PostgreSQL</span>
              </div>
              <div className="flex gap-4">
                <button 
                  className="text-primary hover:underline flex items-center gap-2 group"
                  onClick={() => {/* Add modal or dialog to show detailed info */}}
                >
                  <span>Подробнее</span>
                  <svg 
                    className="w-4 h-4 transform group-hover:translate-x-1 transition-transform" 
                    fill="none" 
                    viewBox="0 0 24 24" 
                    stroke="currentColor"
                  >
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                  </svg>
                </button>
                <a 
                  href="https://github.com/propamYY/kompklub" 
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-primary hover:underline flex items-center gap-2"
                >
                  <span>GitHub</span>
                  <svg 
                    className="w-4 h-4" 
                    fill="currentColor" 
                    viewBox="0 0 24 24"
                  >
                    <path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z"/>
                  </svg>
                </a>
              </div>
            </div>
          </motion.div>
        </div>

        {/* Additional Info */}
        <div className="mt-12 text-center">
          <p className="text-gray-600 mb-6">
            Хотите увидеть больше моих работ? Многие проекты находятся в закрытых репозиториях для конфиденциальности клиентов.
            Я с радостью расскажу о них во время собеседования или предоставлю доступ по запросу.
          </p>
          <motion.div
            initial={{ opacity: 0, y: 10 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            viewport={{ once: true }}
            className="inline-block"
          >
            <a 
              href="#contact" 
              className="btn-primary group"
            >
              <span className="relative z-10 group-hover:text-black transition-colors duration-300">Запланировать обзор кода</span>
              <div className="absolute inset-0 bg-white transform scale-x-0 group-hover:scale-x-100 transition-transform origin-left duration-300"></div>
            </a>
          </motion.div>
        </div>
      </section>

      {/* Contact Section */}
      <section id="contact" className="py-20 bg-gray-50">
        <div className="container-custom text-center">
          <h2 className="section-title text-gradient">Свяжитесь со мной</h2>
          <p className="text-lg mb-8 max-w-2xl mx-auto">
            Я всегда открыт для обсуждения новых проектов, творческих идей или возможностей стать частью вашего видения.
          </p>
          <div className="flex justify-center gap-6 mb-8">
            <a 
              href="https://github.com/propamYY" 
              target="_blank" 
              rel="noopener noreferrer" 
              className="social-link"
            >
              <FaGithub />
            </a>
            <a
              href="https://www.linkedin.com/in/yernury/" 
              target="_blank"
              rel="noopener noreferrer"
              className="social-link"
            >
              <FaLinkedin />
            </a>
            <a
              href="https://t.me/propamyy" 
              target="_blank"
              rel="noopener noreferrer"
              className="social-link"
            >
              <svg 
                className="w-6 h-6" 
                fill="currentColor" 
                viewBox="0 0 24 24"
              >
                <path d="M12 0C5.373 0 0 5.373 0 12s5.373 12 12 12 12-5.373 12-12S18.627 0 12 0zm5.563 8.994l-1.955 9.152c-.145.658-.537.818-1.084.508l-3-2.21-1.447 1.394c-.16.16-.295.295-.605.295l.213-3.053 5.56-5.023c.242-.213-.054-.333-.373-.121l-6.871 4.326-2.962-.924c-.643-.204-.657-.643.136-.953l11.566-4.458c.534-.196 1.001.128.832.941z"/>
              </svg>
            </a>
          </div>
          <a href="mailto:your.email@example.com" className="btn-primary">
            Написать мне
          </a>
        </div>
      </section>
    </main>
  );
}
