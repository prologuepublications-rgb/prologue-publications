// App.tsx — your original Prologue Publications site code
import React, { useState } from "react";
import { motion } from "framer-motion";
import { Menu, X, Send, Mail } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Dialog, DialogContent, DialogDescription, DialogHeader, DialogTitle } from "@/components/ui/dialog";

function CandleLogo() {
  return (
    <div className="flex h-16 w-16 items-center justify-center rounded-full bg-gradient-to-br from-amber-100 to-amber-50 shadow-md border-2 border-amber-400">
      <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 100 100" fill="none" stroke="currentColor" strokeWidth="1.5" className="h-12 w-12 text-amber-900">
        <rect x="45" y="40" width="10" height="30" rx="2" ry="2" fill="currentColor" />
        <path d="M50 25c-4 5-4 10 0 15 4-5 4-10 0-15z" fill="currentColor" />
        <rect x="40" y="70" width="20" height="6" rx="1" ry="1" fill="currentColor" />
      </svg>
    </div>
  );
}

function NavBar({ onOpenSubmit }: { onOpenSubmit: () => void }) {
  const [open, setOpen] = useState(false);
  return (
    <div className="sticky top-0 z-50 w-full border-b bg-amber-50/90 backdrop-blur supports-[backdrop-filter]:bg-amber-100/80">
      <nav className="mx-auto flex max-w-6xl items-center justify-between px-4 py-3">
        <a href="#top" className="flex items-center gap-2">
          <CandleLogo />
          <span className="font-serif text-2xl font-bold tracking-tight text-amber-900">Prologue Publications</span>
        </a>
        <div className="hidden items-center gap-6 md:flex">
          <a href="#about" className="font-serif text-base text-amber-800 hover:text-amber-950">About</a>
          <a href="#submit" className="font-serif text-base text-amber-800 hover:text-amber-950">Submit</a>
          <a href="#subscribe" className="font-serif text-base text-amber-800 hover:text-amber-950">Subscribe</a>
          <Button className="gap-2 bg-amber-300 text-amber-900 font-serif hover:bg-amber-400" onClick={onOpenSubmit}>Submit</Button>
        </div>
        <Button variant="ghost" size="icon" className="md:hidden" onClick={() => setOpen(!open)} aria-label="Toggle navigation">
          {open ? <X className="h-5 w-5"/> : <Menu className="h-5 w-5"/>}
        </Button>
      </nav>
    </div>
  );
}

function IntroHero() {
  return (
    <section id="intro" className="relative bg-gradient-to-br from-amber-50 via-amber-100 to-amber-50">
      <div className="mx-auto max-w-4xl px-4 py-20 text-center">
        <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.6 }}>
          <h1 className="font-serif text-5xl font-bold tracking-tight text-amber-900 md:text-6xl">Prologue Publications</h1>
          <p className="mt-6 font-serif text-lg text-amber-800">
            A student-centered online journal where research and creative works find their first home. We believe in accessibility, diversity, and giving students an easy platform to share their voices with the world.
          </p>
        </motion.div>
      </div>
    </section>
  );
}

function AboutSection() {
  return (
    <section id="about" className="mx-auto max-w-4xl px-4 py-16">
      <Card className="bg-amber-50">
        <CardHeader>
          <CardTitle className="font-serif text-amber-900 text-2xl">About Prologue Publications</CardTitle>
          <CardDescription className="font-serif text-amber-700">A platform for student voices</CardDescription>
        </CardHeader>
        <CardContent className="space-y-3 font-serif text-base leading-7 text-amber-800">
          <p>Prologue Publications is dedicated to providing students with an accessible way to publish their diverse research and creative works. We aim to lower barriers to publishing while nurturing new voices.</p>
          <p>While we don’t have issues yet, our journal will grow into a vibrant space where essays, poetry, stories, and academic insights live side by side.</p>
        </CardContent>
      </Card>
    </section>
  );
}

function SubmitSection() {
  return (
    <section id="submit" className="mx-auto max-w-4xl px-4 py-16">
      <Card className="bg-amber-50">
        <CardHeader>
          <CardTitle className="font-serif text-amber-900">Submit Your Work</CardTitle>
          <CardDescription className="font-serif text-amber-700">Students, share your creativity and research</CardDescription>
        </CardHeader>
        <CardContent>
          <form className="grid gap-4" onSubmit={(e) => e.preventDefault()}>
            <div>
              <label className="mb-1 block font-serif text-sm text-amber-800">Name</label>
              <Input placeholder="Your full name" required />
            </div>
            <div>
              <label className="mb-1 block font-serif text-sm text-amber-800">Email</label>
              <Input type="email" placeholder="you@example.com" required />
            </div>
            <div>
              <label className="mb-1 block font-serif text-sm text-amber-800">Category</label>
              <Input placeholder="Poetry / Research / Creative Work" />
            </div>
            <div>
              <label className="mb-1 block font-serif text-sm text-amber-800">Submission link</label>
              <Input placeholder="Link to Google Drive, Dropbox, etc." />
            </div>
            <Button type="submit" className="gap-2 bg-amber-300 text-amber-900 font-serif hover:bg-amber-400">Send submission <Send className="h-4 w-4"/></Button>
          </form>
        </CardContent>
      </Card>
    </section>
  );
}

function SubscribeForm() {
  const [email, setEmail] = useState("");
  const [done, setDone] = useState(false);
  return (
    <div id="subscribe" className="mx-auto max-w-3xl">
      <Card className="bg-amber-50">
        <CardHeader>
          <CardTitle className="font-serif text-amber-900 text-2xl">Subscribe for Updates</CardTitle>
          <CardDescription className="font-serif text-amber-700">Be the first to know when new works are published.</CardDescription>
        </CardHeader>
        <CardContent className="flex flex-col gap-3 md:flex-row">
          <div className="relative w-full">
            <Mail className="absolute left-3 top-1/2 h-4 w-4 -translate-y-1/2 text-amber-400"/>
            <Input type="email" placeholder="you@example.com" value={email} onChange={(e) => setEmail(e.target.value)} className="pl-9 font-serif" />
          </div>
          <Button className="bg-amber-300 text-amber-900 font-serif hover:bg-amber-400" onClick={() => setDone(true)} disabled={!email.includes("@")}>{done ? "Subscribed" : "Subscribe"}</Button>
        </CardContent>
        <CardFooter>
          <p className="font-serif text-xs text-amber-700">We respect your inbox. Unsubscribe anytime.</p>
        </CardFooter>
      </Card>
    </div>
  );
}

function Footer() {
  return (
    <footer className="mt-16 border-t border-amber-200 bg-amber-50 py-10" id="contact">
      <div className="mx-auto grid max-w-6xl grid-cols-1 gap-8 px-4 md:grid-cols-3">
        <div>
          <div className="flex items-center gap-2">
            <CandleLogo />
            <span className="font-serif text-xl font-semibold tracking-tight text-amber-900">Prologue Publications</span>
          </div>
          <p className="mt-3 font-serif text-sm text-amber-700">A journal for students to share research and creative works.</p>
        </div>
        <div>
          <h4 className="mb-3 font-serif font-medium text-amber-900">Links</h4>
          <ul className="space-y-2 font-serif text-sm text-amber-700">
            <li><a href="#about" className="hover:underline">About</a></li>
            <li><a href="#submit" className="hover:underline">Submit</a></li>
            <li><a href="#subscribe" className="hover:underline">Subscribe</a></li>
          </ul>
        </div>
        <div>
          <h4 className="mb-3 font-serif font-medium text-amber-900">Contact</h4>
          <p className="font-serif text-sm text-amber-700">prologuepublications@gmail.com</p>
        </div>
      </div>
      <div className="mt-8 text-center font-serif text-xs text-amber-700">© {new Date().getFullYear()} Prologue Publications. All rights reserved.</div>
    </footer>
  );
}

export default function ProloguePublicationsSite() {
  const [submitOpen, setSubmitOpen] = useState(false);
  return (
    <div id="top" className="min-h-screen bg-amber-50 text-amber-900 font-serif">
      <NavBar onOpenSubmit={() => setSubmitOpen(true)} />
      <main>
        <IntroHero />
        <AboutSection />
        <SubmitSection />
        <section className="mx-auto max-w-6xl px-4 py-10">
          <SubscribeForm />
        </section>
      </main>
      <Footer />
      <Dialog open={submitOpen} onOpenChange={setSubmitOpen}>
        <DialogContent className="bg-amber-50">
          <DialogHeader>
            <DialogTitle className="font-serif text-amber-900">Quick Submit</DialogTitle>
            <DialogDescription className="font-serif text-amber-700">Drop a link and your email. We’ll confirm soon.</DialogDescription>
          </DialogHeader>
          <form className="space-y-3" onSubmit={(e) => { e.preventDefault(); setSubmitOpen(false); }}>
            <div>
              <label className="mb-1 block font-serif text-sm text-amber-800">Email</label>
              <Input type="email" placeholder="you@example.com" required />
            </div>
            <div>
              <label className="mb-1 block font-serif text-sm text-amber-800">Link to your work</label>
              <Input placeholder="https://..." required />
            </div>
            <div className="flex justify-end">
              <Button type="submit" className="bg-amber-300 text-amber-900 font-serif hover:bg-amber-400">Send</Button>
            </div>
          </form>
        </DialogContent>
      </Dialog>
    </div>
  );
}
