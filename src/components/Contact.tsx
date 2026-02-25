import TerminalWindow from "@/components/TerminalWindow";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";

const Contact = () => {
  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const formData = new FormData(e.currentTarget);
    const name = formData.get('name');
    const email = formData.get('email');
    const subject = formData.get('subject');
    const message = formData.get('message');

    const mailtoLink = `mailto:gourisahil9593@gmail.com?subject=${encodeURIComponent(
      `${subject || 'Contact from Portfolio'}`
    )}&body=${encodeURIComponent(
      `Name: ${name}\nEmail: ${email}\n\nMessage:\n${message}`
    )}`;

    window.location.href = mailtoLink;
  };

  return (
    <section id="contact" className="py-20 px-4" aria-label="Contact Section">
      <div className="max-w-4xl mx-auto">
        <header className="mb-8">
          <h2 className="text-xl md:text-2xl font-semibold text-[var(--syntax-comment)]">
            // contact
          </h2>
        </header>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
          <div className="space-y-6">
            <TerminalWindow title="contact.sh">
              <div className="space-y-4 text-sm md:text-base">
                <div>
                  <span className="mr-2 text-[var(--accent-primary)]">$</span>
                  <span className="text-[var(--text-primary)]">./contact.sh</span>
                </div>
                <div className="space-y-1 text-[var(--text-secondary)]">
                  <div>
                    <span className="mr-2">&gt;</span>
                    <span>
                      I'm actively seeking junior backend roles and internships.
                    </span>
                  </div>
                  <div>
                    <span className="mr-2">&gt;</span>
                    <span>
                      Both my projects are live. My code is public. Let's talk.
                    </span>
                  </div>
                </div>
              </div>
            </TerminalWindow>

            <div className="space-y-1 text-xs text-[var(--syntax-comment)]">
              <div># currently available</div>
              <div># response time: &lt; 24 hours</div>
              <div># location: Ahmedabad, India (remote-friendly)</div>
            </div>
          </div>

          {/* Contact Form */}
          <div className="rounded-md border border-[var(--bg-overlay)] bg-[var(--bg-surface)] p-6">
            <form className="space-y-4" onSubmit={handleSubmit}>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <div className="space-y-1">
                  <label
                    htmlFor="name"
                    className="text-xs text-[var(--syntax-comment)]"
                  >
                    # your name
                  </label>
                  <Input
                    id="name"
                    name="name"
                    placeholder="sahil gouri"
                    className="bg-[var(--bg-elevated)] border-[var(--bg-overlay)] text-[var(--text-primary)] placeholder:text-[var(--text-muted)] focus-visible:ring-[var(--accent-primary)] focus-visible:border-[var(--accent-primary)]"
                    required
                  />
                </div>
                <div className="space-y-1">
                  <label
                    htmlFor="email"
                    className="text-xs text-[var(--syntax-comment)]"
                  >
                    # your email
                  </label>
                  <Input
                    id="email"
                    name="email"
                    type="email"
                    placeholder="you@company.com"
                    className="bg-[var(--bg-elevated)] border-[var(--bg-overlay)] text-[var(--text-primary)] placeholder:text-[var(--text-muted)] focus-visible:ring-[var(--accent-primary)] focus-visible:border-[var(--accent-primary)]"
                    required
                  />
                </div>
              </div>

              <div className="space-y-1">
                <label
                  htmlFor="subject"
                  className="text-xs text-[var(--syntax-comment)]"
                >
                  # subject
                </label>
                <Input
                  id="subject"
                  name="subject"
                  placeholder="Backend role, project, or question"
                  className="bg-[var(--bg-elevated)] border-[var(--bg-overlay)] text-[var(--text-primary)] placeholder:text-[var(--text-muted)] focus-visible:ring-[var(--accent-primary)] focus-visible:border-[var(--accent-primary)]"
                  required
                />
              </div>

              <div className="space-y-1">
                <label
                  htmlFor="message"
                  className="text-xs text-[var(--syntax-comment)]"
                >
                  # message
                </label>
                <Textarea
                  id="message"
                  name="message"
                  placeholder="Tell me about the team, problem, or idea you’re working on."
                  rows={5}
                  className="bg-[var(--bg-elevated)] border-[var(--bg-overlay)] text-[var(--text-primary)] placeholder:text-[var(--text-muted)] focus-visible:ring-[var(--accent-primary)] focus-visible:border-[var(--accent-primary)] resize-none"
                  required
                />
              </div>

              <button
                type="submit"
                className="mt-2 w-full rounded-[2px] bg-[var(--accent-primary)] px-4 py-2 text-sm font-medium text-black transition-all duration-200 hover:brightness-110 hover:shadow-[0_0_24px_var(--accent-glow)] focus:outline-none focus:ring-2 focus:ring-[var(--accent-primary)] focus:ring-offset-2 focus:ring-offset-[var(--bg-base)]"
              >
                [send message]
              </button>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
