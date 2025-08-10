import { useState } from 'react';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Avatar, AvatarFallback } from '@/components/ui/avatar';
import Icon from '@/components/ui/icon';

const Index = () => {
  const [selectedEvent, setSelectedEvent] = useState(null);

  const upcomingEvents = [
    {
      id: 1,
      title: "Дискуссионный клуб: Технологии будущего",
      date: "15 августа, 19:00",
      location: "Кафе 'Время'",
      participants: 12,
      maxParticipants: 15,
      description: "Обсуждаем влияние ИИ на повседневную жизнь",
      tag: "Технологии"
    },
    {
      id: 2,
      title: "Литературная встреча",
      date: "20 августа, 18:30",
      location: "Библиотека на Невском",
      participants: 8,
      maxParticipants: 12,
      description: "Разбираем современную российскую прозу",
      tag: "Литература"
    },
    {
      id: 3,
      title: "Философское кафе",
      date: "25 августа, 17:00",
      location: "Арт-пространство 'Мысли'",
      participants: 10,
      maxParticipants: 20,
      description: "Этика в цифровую эпоху",
      tag: "Философия"
    }
  ];

  const testimonials = [
    {
      name: "Анна Петрова",
      text: "Удивительная атмосфера и интересные люди! Каждая встреча — это новые идеи и вдохновение.",
      rating: 5,
      event: "Философское кафе",
      avatar: "АП"
    },
    {
      name: "Михаил Сидоров",
      text: "Наконец-то нашел единомышленников. Дискуссии всегда живые и содержательные.",
      rating: 5,
      event: "Дискуссионный клуб",
      avatar: "МС"
    },
    {
      name: "Елена Васильева",
      text: "Отличная организация и тщательно подобранные темы. Рекомендую всем!",
      rating: 5,
      event: "Литературная встреча",
      avatar: "ЕВ"
    }
  ];

  const galleryImages = [
    { src: "/img/812b912b-f6b1-4fc8-84ff-8eb9361fbbb4.jpg", alt: "Встреча в кафе" },
    { src: "/img/94becdd6-6d90-49f8-b23f-98825ca03e57.jpg", alt: "Мастер-класс" },
    { src: "/img/e0065e92-92a6-4f9d-ac49-0a90a638afb5.jpg", alt: "Встреча на природе" }
  ];

  return (
    <div className="min-h-screen bg-background">
      {/* Header */}
      <header className="border-b bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60 sticky top-0 z-40">
        <div className="container flex h-16 items-center justify-between">
          <div className="flex items-center space-x-2">
            <Icon name="Coffee" className="h-6 w-6 text-primary" />
            <h1 className="text-xl font-semibold">Клуб встреч</h1>
          </div>
          <nav className="hidden md:flex items-center space-x-6">
            <a href="#events" className="text-sm font-medium hover:text-primary transition-colors">Мероприятия</a>
            <a href="#about" className="text-sm font-medium hover:text-primary transition-colors">О клубе</a>
            <a href="#gallery" className="text-sm font-medium hover:text-primary transition-colors">Галерея</a>
            <a href="#contacts" className="text-sm font-medium hover:text-primary transition-colors">Контакты</a>
          </nav>
          <Button>Присоединиться</Button>
        </div>
      </header>

      {/* Hero Section */}
      <section className="py-20 px-4">
        <div className="container max-w-4xl mx-auto text-center">
          <h2 className="text-4xl md:text-6xl font-bold mb-6 leading-tight">
            Место, где рождаются<br />
            <span className="text-primary">идеи и дружба</span>
          </h2>
          <p className="text-xl text-muted-foreground mb-8 max-w-2xl mx-auto">
            Присоединяйтесь к нашему сообществу людей, которые ценят живое общение, 
            интересные дискуссии и новые знакомства
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button size="lg" className="px-8">
              <Icon name="Calendar" className="mr-2 h-5 w-5" />
              Записаться на встречу
            </Button>
            <Button variant="outline" size="lg" className="px-8">
              Узнать больше
            </Button>
          </div>
        </div>
      </section>

      {/* Stats */}
      <section className="py-12 bg-muted/30">
        <div className="container">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8 text-center">
            <div>
              <div className="text-3xl font-bold text-primary">200+</div>
              <div className="text-sm text-muted-foreground">Участников</div>
            </div>
            <div>
              <div className="text-3xl font-bold text-primary">50+</div>
              <div className="text-sm text-muted-foreground">Мероприятий</div>
            </div>
            <div>
              <div className="text-3xl font-bold text-primary">12</div>
              <div className="text-sm text-muted-foreground">Направлений</div>
            </div>
            <div>
              <div className="text-3xl font-bold text-primary">3</div>
              <div className="text-sm text-muted-foreground">Года работы</div>
            </div>
          </div>
        </div>
      </section>

      {/* Events Section */}
      <section id="events" className="py-20 px-4">
        <div className="container max-w-6xl mx-auto">
          <div className="text-center mb-12">
            <h3 className="text-3xl font-bold mb-4">Предстоящие мероприятия</h3>
            <p className="text-lg text-muted-foreground">Выберите встречу по душе</p>
          </div>
          
          <div className="grid md:grid-cols-3 gap-6">
            {upcomingEvents.map((event) => (
              <Card key={event.id} className="hover:shadow-lg transition-shadow cursor-pointer group">
                <CardHeader>
                  <div className="flex items-center justify-between mb-2">
                    <Badge variant="secondary">{event.tag}</Badge>
                    <div className="flex items-center text-sm text-muted-foreground">
                      <Icon name="Users" className="mr-1 h-4 w-4" />
                      {event.participants}/{event.maxParticipants}
                    </div>
                  </div>
                  <CardTitle className="group-hover:text-primary transition-colors">{event.title}</CardTitle>
                  <CardDescription>{event.description}</CardDescription>
                </CardHeader>
                <CardContent>
                  <div className="space-y-2">
                    <div className="flex items-center text-sm">
                      <Icon name="Calendar" className="mr-2 h-4 w-4 text-muted-foreground" />
                      {event.date}
                    </div>
                    <div className="flex items-center text-sm">
                      <Icon name="MapPin" className="mr-2 h-4 w-4 text-muted-foreground" />
                      {event.location}
                    </div>
                  </div>
                  <Button className="w-full mt-4">Записаться</Button>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Testimonials Section */}
      <section className="py-20 px-4 bg-muted/30">
        <div className="container max-w-6xl mx-auto">
          <div className="text-center mb-12">
            <h3 className="text-3xl font-bold mb-4">Отзывы участников</h3>
            <p className="text-lg text-muted-foreground">Что говорят наши друзья</p>
          </div>

          <div className="grid md:grid-cols-3 gap-6">
            {testimonials.map((testimonial, index) => (
              <Card key={index} className="bg-background">
                <CardContent className="pt-6">
                  <div className="flex items-center mb-4">
                    <Avatar className="h-10 w-10 mr-3">
                      <AvatarFallback>{testimonial.avatar}</AvatarFallback>
                    </Avatar>
                    <div>
                      <div className="font-medium">{testimonial.name}</div>
                      <div className="flex items-center">
                        {[...Array(testimonial.rating)].map((_, i) => (
                          <Icon key={i} name="Star" className="h-4 w-4 text-yellow-500 fill-current" />
                        ))}
                      </div>
                    </div>
                  </div>
                  <p className="text-muted-foreground mb-3">"{testimonial.text}"</p>
                  <Badge variant="outline">{testimonial.event}</Badge>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Gallery Section */}
      <section id="gallery" className="py-20 px-4">
        <div className="container max-w-6xl mx-auto">
          <div className="text-center mb-12">
            <h3 className="text-3xl font-bold mb-4">Галерея</h3>
            <p className="text-lg text-muted-foreground">Моменты наших встреч</p>
          </div>

          <div className="grid md:grid-cols-3 gap-6">
            {galleryImages.map((image, index) => (
              <div key={index} className="aspect-square overflow-hidden rounded-lg bg-muted group cursor-pointer">
                <img 
                  src={image.src} 
                  alt={image.alt}
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                />
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* About Section */}
      <section id="about" className="py-20 px-4 bg-muted/30">
        <div className="container max-w-4xl mx-auto text-center">
          <h3 className="text-3xl font-bold mb-6">О нашем клубе</h3>
          <p className="text-lg text-muted-foreground mb-8">
            Мы создали пространство для людей, которые хотят развиваться, общаться и находить 
            единомышленников. Наш клуб объединяет любителей интеллектуальных бесед, 
            творческих дискуссий и новых знакомств.
          </p>
          <div className="grid md:grid-cols-3 gap-8 mt-12">
            <div className="text-center">
              <div className="w-16 h-16 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-4">
                <Icon name="MessageCircle" className="h-8 w-8 text-primary" />
              </div>
              <h4 className="font-semibold mb-2">Живое общение</h4>
              <p className="text-sm text-muted-foreground">Никаких гаджетов — только искренние разговоры</p>
            </div>
            <div className="text-center">
              <div className="w-16 h-16 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-4">
                <Icon name="Lightbulb" className="h-8 w-8 text-primary" />
              </div>
              <h4 className="font-semibold mb-2">Новые идеи</h4>
              <p className="text-sm text-muted-foreground">Каждая встреча открывает новые горизонты</p>
            </div>
            <div className="text-center">
              <div className="w-16 h-16 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-4">
                <Icon name="Heart" className="h-8 w-8 text-primary" />
              </div>
              <h4 className="font-semibold mb-2">Теплая атмосфера</h4>
              <p className="text-sm text-muted-foreground">Дружелюбное сообщество без предрассудков</p>
            </div>
          </div>
        </div>
      </section>

      {/* Contacts Section */}
      <section id="contacts" className="py-20 px-4">
        <div className="container max-w-4xl mx-auto text-center">
          <h3 className="text-3xl font-bold mb-6">Свяжитесь с нами</h3>
          <p className="text-lg text-muted-foreground mb-8">
            Есть вопросы? Хотите предложить тему для дискуссии? Мы всегда на связи!
          </p>
          
          <div className="grid md:grid-cols-3 gap-8">
            <div className="text-center">
              <div className="w-16 h-16 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-4">
                <Icon name="Mail" className="h-8 w-8 text-primary" />
              </div>
              <h4 className="font-semibold mb-2">Email</h4>
              <p className="text-muted-foreground">club@example.com</p>
            </div>
            <div className="text-center">
              <div className="w-16 h-16 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-4">
                <Icon name="Phone" className="h-8 w-8 text-primary" />
              </div>
              <h4 className="font-semibold mb-2">Телефон</h4>
              <p className="text-muted-foreground">+7 (999) 123-45-67</p>
            </div>
            <div className="text-center">
              <div className="w-16 h-16 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-4">
                <Icon name="MapPin" className="h-8 w-8 text-primary" />
              </div>
              <h4 className="font-semibold mb-2">Адрес</h4>
              <p className="text-muted-foreground">Санкт-Петербург, ул. Примерная, 42</p>
            </div>
          </div>

          <div className="mt-12">
            <Button size="lg" className="px-12">
              <Icon name="Send" className="mr-2 h-5 w-5" />
              Написать нам
            </Button>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="border-t py-8 px-4">
        <div className="container max-w-6xl mx-auto">
          <div className="flex flex-col md:flex-row justify-between items-center">
            <div className="flex items-center space-x-2 mb-4 md:mb-0">
              <Icon name="Coffee" className="h-5 w-5 text-primary" />
              <span className="font-semibold">Клуб встреч</span>
            </div>
            <p className="text-sm text-muted-foreground text-center md:text-right">
              © 2024 Клуб встреч по интересам. Создано с любовью к общению.
            </p>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default Index;