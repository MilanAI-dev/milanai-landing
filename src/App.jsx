import { ChevronRight, CheckCircle, Menu } from "lucide-react";
import { Button } from "./components/ui/Button";
import { Card, CardContent } from "./components/ui/Card";
import WaitlistForm from "./components/waitlist-form";
import { Toaster } from "./components/ui/Toaster";
import Header from "./components/Header";
import Footer from "./components/Footer";

export default function Home() {
  return (
    <div className="flex min-h-screen flex-col">
      <Header />

      <main className="flex-1">
        {/* Hero Section */}
        <section className="py-20 md:py-28 bg-gradient-to-b from-background to-muted">
          <div className="mx-auto container px-4 md:px-6">
            <div className="grid gap-6 lg:grid-cols-2 lg:gap-12 items-center">
              <div className="flex flex-col justify-center space-y-4">
                <div className="inline-block rounded-lg bg-primary/10 px-3 py-1 text-sm text-primary">
                  Introducing Milan AI
                </div>
                <h1 className="text-3xl font-bold tracking-tighter sm:text-5xl xl:text-6xl/none">
                  One AI Platform for All Your Developer Tools
                </h1>
                <p className="max-w-[600px] text-muted-foreground md:text-xl">
                  Milan AI brings together the various apps and platforms used
                  by developers under one application, reducing the efforts of
                  switching between apps.
                </p>
                <div className="flex flex-col gap-2 min-[400px]:flex-row">
                  <a href="/#waitlist">
                    <Button size="lg" className="gap-1.5">
                      Join Waitlist <ChevronRight className="h-4 w-4" />
                    </Button>
                  </a>
                  <a href="/#features">
                    <Button size="lg" variant="outline">
                      Learn More
                    </Button>
                  </a>
                </div>
              </div>
              <div className="flex justify-center lg:justify-end">
                <img
                  src="/logo.png"
                  className="h-70 w-70 rounded-full shadow-lg"
                />
              </div>
            </div>
          </div>
        </section>

        {/* Problem Section */}
        <section id="problem" className="py-16 md:py-24 bg-background">
          <div className="mx-auto container px-4 md:px-6">
            <div className="flex flex-col items-center justify-center space-y-4 text-center">
              <div className="space-y-2">
                <div className="inline-block rounded-lg bg-primary/10 px-3 py-1 text-sm text-primary">
                  The Problem
                </div>
                <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl">
                  Why Developers Struggle
                </h2>
                <p className="max-w-[900px] text-muted-foreground md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed">
                  Developers waste up to 30% of their time due to context
                  switching between multiple tools and platforms.
                </p>
              </div>
            </div>
            <div className="mx-auto grid grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-3 mt-12">
              <Card>
                <CardContent className="p-6 flex flex-col items-center text-center space-y-4">
                  <div className="rounded-full p-3 bg-primary/10">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width="24"
                      height="24"
                      viewBox="0 0 24 24"
                      fill="none"
                      stroke="currentColor"
                      strokeWidth="2"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      className="h-6 w-6 text-primary"
                    >
                      <path d="M18 6H5a2 2 0 0 0-2 2v3a2 2 0 0 0 2 2h13l4-3.5L18 6Z" />
                      <path d="M12 13v8" />
                      <path d="M5 13v6a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2v-6" />
                    </svg>
                  </div>
                  <h3 className="text-xl font-bold">Context Switching</h3>
                  <p className="text-muted-foreground">
                    Developers lose up to 30% of their time switching between
                    different tools and platforms.
                  </p>
                </CardContent>
              </Card>
              <Card>
                <CardContent className="p-6 flex flex-col items-center text-center space-y-4">
                  <div className="rounded-full p-3 bg-primary/10">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width="24"
                      height="24"
                      viewBox="0 0 24 24"
                      fill="none"
                      stroke="currentColor"
                      strokeWidth="2"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      className="h-6 w-6 text-primary"
                    >
                      <path d="M8.8 20v-4.1l1.9.2a2.3 2.3 0 0 0 2.164-2.1V8.3A5.37 5.37 0 0 0 2 8.25c0 2.8.656 3.95 1 4.8a.2.2 0 0 1-.2.2h-.5a.2.2 0 0 1-.2-.2s0-4.85.1-4.85" />
                      <path d="M21.2 8.3a5.37 5.37 0 0 0-10.8.05V14a2.3 2.3 0 0 0 2.164 2.1l1.936.2V20" />
                      <path d="M6.2 13H8" />
                      <path d="M16 13h1.8" />
                    </svg>
                  </div>
                  <h3 className="text-xl font-bold">Overlapping Costs</h3>
                  <p className="text-muted-foreground">
                    Companies spend over $100/month per employee on multiple
                    overlapping tools.
                  </p>
                </CardContent>
              </Card>
              <Card>
                <CardContent className="p-6 flex flex-col items-center text-center space-y-4">
                  <div className="rounded-full p-3 bg-primary/10">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width="24"
                      height="24"
                      viewBox="0 0 24 24"
                      fill="none"
                      stroke="currentColor"
                      strokeWidth="2"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      className="h-6 w-6 text-primary"
                    >
                      <path d="M12.22 2h-.44a2 2 0 0 0-2 2v.18a2 2 0 0 1-1 1.73l-.43.25a2 2 0 0 1-2 0l-.15-.08a2 2 0 0 0-2.73.73l-.22.38a2 2 0 0 0 .73 2.73l.15.1a2 2 0 0 1 1 1.72v.51a2 2 0 0 1-1 1.74l-.15.09a2 2 0 0 0-.73 2.73l.22.38a2 2 0 0 0 2.73.73l.15-.08a2 2 0 0 1 2 0l.43.25a2 2 0 0 1 1 1.73V20a2 2 0 0 0 2 2h.44a2 2 0 0 0 2-2v-.18a2 2 0 0 1 1-1.73l.43-.25a2 2 0 0 1 2 0l.15.08a2 2 0 0 0 2.73-.73l.22-.39a2 2 0 0 0-.73-2.73l-.15-.08a2 2 0 0 1-1-1.74v-.5a2 2 0 0 1 1-1.74l.15-.09a2 2 0 0 0 .73-2.73l-.22-.38a2 2 0 0 0-2.73-.73l-.15.08a2 2 0 0 1-2 0l-.43-.25a2 2 0 0 1-1-1.73V4a2 2 0 0 0-2-2z" />
                      <circle cx="12" cy="12" r="3" />
                    </svg>
                  </div>
                  <h3 className="text-xl font-bold">Fragmented Workflows</h3>
                  <p className="text-muted-foreground">
                    Scattered notifications and missed updates lead to
                    inefficient workflows and lost productivity.
                  </p>
                </CardContent>
              </Card>
            </div>
          </div>
        </section>

        {/* Solution Section */}
        <section id="solution" className="py-16 md:py-24 bg-muted">
          <div className="container mx-auto px-4 md:px-6">
            <div className="flex flex-col items-center justify-center space-y-4 text-center">
              <div className="space-y-2">
                <div className="inline-block rounded-lg bg-primary/10 px-3 py-1 text-sm text-primary">
                  The Solution
                </div>
                <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl">
                  Introducing Milan AI
                </h2>
                <p className="max-w-[900px] text-muted-foreground md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed">
                  An AI-assisted unified platform that integrates all your
                  development tools into a single application.
                </p>
              </div>
            </div>
            <div className="grid gap-6 lg:grid-cols-2 lg:gap-12 items-center mt-12">
              <div className="flex justify-center">
                <div className="relative h-[300px] w-[300px] md:h-[400px] md:w-[400px] bg-gradient-to-r from-primary/20 via-primary/30 to-primary/20 rounded-lg shadow-lg flex items-center justify-center">
                  <div className="absolute inset-4 bg-background/80 backdrop-blur-sm rounded-lg flex items-center justify-center">
                    <div className="text-center">
                      <h3 className="text-2xl font-bold text-primary mb-4">
                        Milan AI Platform
                      </h3>
                      <div className="grid grid-cols-2 gap-4 px-6">
                        <div className="flex items-center gap-2">
                          <CheckCircle className="h-5 w-5 text-primary" />
                          <span>Project Management</span>
                        </div>
                        <div className="flex items-center gap-2">
                          <CheckCircle className="h-5 w-5 text-primary" />
                          <span>Code Sharing</span>
                        </div>
                        <div className="flex items-center gap-2">
                          <CheckCircle className="h-5 w-5 text-primary" />
                          <span>Meetings</span>
                        </div>
                        <div className="flex items-center gap-2">
                          <CheckCircle className="h-5 w-5 text-primary" />
                          <span>Email Integration</span>
                        </div>
                        <div className="flex items-center gap-2">
                          <CheckCircle className="h-5 w-5 text-primary" />
                          <span>Chat</span>
                        </div>
                        <div className="flex items-center gap-2">
                          <CheckCircle className="h-5 w-5 text-primary" />
                          <span>AI Assistant</span>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <div className="space-y-4">
                <h3 className="text-2xl font-bold">How Milan AI Works</h3>
                <ul className="space-y-4">
                  <li className="flex items-start gap-4">
                    <div className="rounded-full bg-primary/10 p-1">
                      <CheckCircle className="h-5 w-5 text-primary" />
                    </div>
                    <div>
                      <h4 className="font-bold">Unified Dashboard</h4>
                      <p className="text-muted-foreground">
                        Access all your development tools from a single,
                        intuitive dashboard.
                      </p>
                    </div>
                  </li>
                  <li className="flex items-start gap-4">
                    <div className="rounded-full bg-primary/10 p-1">
                      <CheckCircle className="h-5 w-5 text-primary" />
                    </div>
                    <div>
                      <h4 className="font-bold">Seamless Communication</h4>
                      <p className="text-muted-foreground">
                        Chat, email, and meetings all integrated into one
                        platform.
                      </p>
                    </div>
                  </li>
                  <li className="flex items-start gap-4">
                    <div className="rounded-full bg-primary/10 p-1">
                      <CheckCircle className="h-5 w-5 text-primary" />
                    </div>
                    <div>
                      <h4 className="font-bold">AI-Powered Assistance</h4>
                      <p className="text-muted-foreground">
                        Intelligent suggestions and automation to boost
                        productivity.
                      </p>
                    </div>
                  </li>
                  <li className="flex items-start gap-4">
                    <div className="rounded-full bg-primary/10 p-1">
                      <CheckCircle className="h-5 w-5 text-primary" />
                    </div>
                    <div>
                      <h4 className="font-bold">Project and Task Management</h4>
                      <p className="text-muted-foreground">
                        Manage your projects and tasks efficiently in one place.
                      </p>
                    </div>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </section>

        {/* Features Section */}
        <section id="features" className="py-16 md:py-24 bg-background">
          <div className="container mx-auto px-4 md:px-6">
            <div className="flex flex-col items-center justify-center space-y-4 text-center">
              <div className="space-y-2">
                <div className="inline-block rounded-lg bg-primary/10 px-3 py-1 text-sm text-primary">
                  Key Features
                </div>
                <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl">
                  Powered by Advanced AI
                </h2>
                <p className="max-w-[900px] text-muted-foreground md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed">
                  Milan AI leverages cutting-edge artificial intelligence to
                  streamline your development workflow.
                </p>
              </div>
            </div>
            <div className="mx-auto grid max-w-5xl grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-3 mt-12">
              {[
                {
                  title: "Custom AI Workflows",
                  description:
                    "Create personalized AI workflows tailored to your development process.",
                },
                {
                  title: "AI-Based Security",
                  description:
                    "Advanced security and compliance monitoring powered by AI.",
                },
                {
                  title: "API Optimization",
                  description:
                    "AI-powered API optimization to improve performance and efficiency.",
                },
                {
                  title: "Automated Reporting",
                  description:
                    "Generate comprehensive reports automatically with AI assistance.",
                },
                {
                  title: "Domain-Specific Training",
                  description:
                    "AI that learns your domain and provides specialized assistance.",
                },
                {
                  title: "Tool Matching",
                  description:
                    "AI-driven tool matching to recommend the best tools for your tasks.",
                },
              ].map((feature, index) => (
                <Card key={index}>
                  <CardContent className="p-6 flex flex-col space-y-2">
                    <h3 className="text-xl font-bold">{feature.title}</h3>
                    <p className="text-muted-foreground">
                      {feature.description}
                    </p>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        </section>

        {/* Team Section */}
        <section id="team" className="py-16 md:py-24 bg-background">
          <div className="container mx-auto px-4 md:px-6">
            <div className="flex flex-col items-center justify-center space-y-4 text-center">
              <div className="space-y-2">
                <div className="inline-block rounded-lg bg-primary/10 px-3 py-1 text-sm text-primary">
                  The Team
                </div>
                <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl">
                  Meet the Innovators Behind Milan AI
                </h2>
                <p className="max-w-[900px] text-muted-foreground md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed">
                  Our team of passionate developers and engineers is dedicated
                  to revolutionizing the development workflow.
                </p>
              </div>
            </div>
            <div className="mx-auto grid max-w-5xl grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-3 mt-12">
              {[
                {
                  name: "Vachan M N",
                  role: "Full-Stack Developer",
                  bio: "Freelance full-stack web developer passionate about creating impactful apps.",
                },
                {
                  name: "Sumit Kumar Jha",
                  role: "Blockchain Developer",
                  bio: "Passionate full-stack developer with over 3 years of experience in Blockchain development.",
                },
                {
                  name: "Arun Ramesh Chavan",
                  role: "Full-Stack Developer",
                  bio: "Passionate about building scalable and user-centric applications.",
                },
                {
                  name: "V Chaitanya Chowdari",
                  role: "AI Specialist",
                  bio: "Deep passion for artificial intelligence, machine learning, blockchain, and futuristic technologies.",
                },
                {
                  name: "Darshan Kumar M",
                  role: "Data Scientist",
                  bio: "Data Science enthusiast who has worked on multiple data analytical projects.",
                },
                {
                  name: "Rinith R",
                  role: "Engineer & Builder",
                  bio: "Passionate engineer and solo builder, crafting AI-driven and full-stack solutions that solve real-world problems.",
                },
              ].map((member, index) => (
                <Card key={index}>
                  <CardContent className="p-6 flex flex-col items-center text-center space-y-4">
                    <div className="rounded-full bg-primary/10 p-6 h-24 w-24 flex items-center justify-center">
                      <div className="text-2xl font-bold text-primary">
                        {member.name.split(" ")[0][0]}
                        {member.name.split(" ")[1][0]}
                      </div>
                    </div>
                    <div>
                      <h3 className="text-xl font-bold">{member.name}</h3>
                      <p className="text-sm text-primary">{member.role}</p>
                    </div>
                    <p className="text-muted-foreground">{member.bio}</p>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        </section>

        {/* Waitlist Section */}
        <section id="waitlist" className="py-16 md:py-24 bg-primary/5">
          <div className="container mx-auto px-4 md:px-6">
            <div className="flex flex-col items-center justify-center space-y-4 text-center">
              <div className="space-y-2">
                <div className="inline-block rounded-lg bg-primary/10 px-3 py-1 text-sm text-primary">
                  Early Access
                </div>
                <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl">
                  Join the Waitlist
                </h2>
                <p className="max-w-[900px] text-muted-foreground md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed">
                  Be among the first to experience Milan AI and revolutionize
                  your development workflow.
                </p>
              </div>
            </div>
            <div className="mx-auto max-w-md space-y-6 mt-8">
              <WaitlistForm />
            </div>
          </div>
        </section>
      </main>

      <Footer />
      <Toaster />
    </div>
  );
}
