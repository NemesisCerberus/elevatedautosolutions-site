import React from 'react';

interface BlogPageProps {
  navigateToPage: (page: string) => void;
}

const BlogPage: React.FC<BlogPageProps> = ({ navigateToPage }) => {
  const [selectedPost, setSelectedPost] = React.useState(0);

  const blogPosts = [
    {
      id: 1,
      title: "How Gamified Learning Increases Student Engagement",
      category: "Product Spotlight",
      date: "Jan 20, 2026",
      excerpt: "Discover how interactive, game-based learning transforms passive students into engaged learners.",
      image: "/How Gamified Learning.webp",
      content: `I'll never forget watching a student's face light up during a diagnostic game in our electrical class. This student had been checked out using all the traditional presentation methods of yester-year - arms crossed, staring at his phone or nodding off due to lack of engagement. But the moment we turned that diagnostic scenario into a competition? Something shifted.

He was leaning forward. Asking questions. Talking to his partner about strategy. Actually caring about getting it right.

That moment stuck with me. Because I realized something I should've known all along: we're not failing our students. We're boring them to death with outdated methods.

Here's the honest truth—most of us learned automotive on a bench with a wrench, or from textbooks that smelled like old paper. That worked for us. But today's students? They grew up with interactive experiences. They expect engagement. When we hand them a 50-page study guide, we're not just asking them to learn—we're asking them to care about something presented in the most boring way possible.

Gamification works because it meets students where they are. It respects their attention span. It gives them immediate feedback instead of waiting weeks for a test grade. And yes—it makes learning feel less like punishment and more like something worth their time.`
    },
    {
      id: 2,
      title: "Expanding the Pathway: Traditional Training + Flexible Learning",
      category: "Industry Insights",
      date: "Jan 20, 2026",
      excerpt: "Why both traditional apprenticeships and flexible learning options matter for the future of automotive education.",
      image: "/Expanding the Pathway.webp",
      content: `Traditional automotive training works. A solid vocational program—with hands-on labs, experienced instructors, structured curriculum, and peer learning—is invaluable. Students who go through these programs are better prepared. They graduate with certifications, real shop experience, and professional networks. That's the ideal pathway, and it should be celebrated.

But here's what I also know: not everyone can access it.

I met a kid last year—smart as hell, great work ethic, wanted to be a technician. But he couldn't do a traditional vocational program because he was working full-time to help support his family. He worked nights at a warehouse, slept a few hours, and couldn't commit to a rigid classroom schedule. So he didn't get trained. His potential wasted because the system didn't have space for him.

He's not alone.

**The Real Barriers**

Traditional training assumes you have time, money, and a stable life situation. Not everyone does:

Single parents working multiple jobs
People who need income now, not after waiting for a program to start
Those with caregiving responsibilities (elderly parents, siblings, kids)
People living paycheck-to-paycheck who can't afford to not work while training
Those with transportation or scheduling challenges

These aren't excuses. These are real constraints. And when someone can't fit into a traditional pathway through no fault of their own, we tell them "too bad"—and we lose them.

**Why We're Losing Talent**

The vocational pipeline works for people with resources. For everyone else? The barrier is real. So what happens? We lose talented people who could've been excellent technicians. They find other work. They move on. The technician shortage gets worse.

But here's the thing—these people still want to work in automotive. They still want to develop skills. They just need flexibility.

**Two Pathways, Both Valuable**

Traditional training is still the gold standard. But we can also support people who can't access it:

On-the-job training that builds credentials while people work
Self-paced digital content people can learn from at home (before, after, or between shifts)
Micro-credentials that allow people to stack smaller wins toward full certification
Flexible mentorship from experienced techs—learning that fits their schedule
Support for people already in automotive jobs to level up and specialize

These aren't replacements for vocational programs. They're alternatives for people the traditional system leaves behind.

**The Compassionate Reality**

Ideally? Everyone would have access to great vocational training and the stability to attend full-time. But that's not reality for everyone. Some people have to work. Some have family obligations. Some face circumstances that make a traditional program impossible.

When we only have one pathway, we're saying: "If you can't do this, we don't have room for you." We lose people. They lose opportunity. The industry loses talent.

When we offer multiple pathways—traditional training and flexible, on-the-job learning—we're saying: "We see your reality. We respect your constraints. Here's how you can still become a skilled technician."

The talent is there. The drive is there. We just need systems that work for different life situations, not just the ideal ones.`
    },
    {
      id: 3,
      title: "From Technician to Educator: Why Skilled Instructors Need Better Tools",
      category: "Education",
      date: "Jan 20, 2026",
      excerpt: "The transition from master technician to classroom instructor is harder than it looks. Here's why educators deserve better support.",
      image: "/From Technician to Educator.webp",
      content: `I know a technician who was brilliant with a diagnostic scanner. Fifteen years of experience. Respected in the shop. The kind of person who could walk up to a car and know what was wrong before he even plugged anything in.

Then his community college asked him to teach.

He said yes because he wanted to give back. He believed in training the next generation. But within six weeks, he realized something: being good at automotive work doesn't teach you how to be good at teaching.

He was staying up until midnight trying to figure out how to make lesson plans engaging. He was Googling "how to use PowerPoint." He was frustrated because he knew the technical content cold, but creating content that would actually stick with students? That was a different skill entirely—one he'd never learned.

He's not alone. This is the story I hear over and over from technical instructors.

**The Brutal Transition**

Here's what happens: A technician becomes an educator because they're skilled and they want to contribute. But nobody tells them that excellence in the trade doesn't automatically translate to excellence in the classroom.

They're expected to:

Create curriculum from scratch
Design engaging lesson plans
Produce or find quality video content
Develop hands-on scenarios that teach real skills
Keep content current as vehicles evolve
Manage different learning styles in one classroom
All while keeping their own technical knowledge sharp.

That's not one job. That's five jobs. And most instructors get no training for any of them.

**The Real Cost**

When skilled technicians lack the tools and support to teach effectively, everyone loses:

Students get bored. Traditional lectures and outdated textbooks don't engage modern learners. Retention drops. Graduation rates stagnate.

Instructors burn out. They're working evenings and weekends trying to build content, manage classroom dynamics, and keep everything current. The passion that brought them into teaching gets exhausted away.

The industry loses. Programs produce fewer graduates, or graduates without the engagement and preparation they need.

**The Content Problem**

Here's the specific pain: creating engaging technical content is *hard*. It requires:

Understanding instructional design (not intuitive for technicians)
Video production skills (most educators don't have)
Knowledge of how people actually learn (different from knowing the material)
Time and resources most educators don't have

So what do they do? They default to the tools available: outdated textbooks, generic PowerPoints, lectures. Students disengage. Instructors feel like failures even though the problem isn't their technical expertise—it's the lack of support to translate that expertise into great teaching.

**Two Ways Forward**

This is where we step in. We recognize that excellent technical educators shouldn't have to become instructional designers and video producers to be effective. So we offer flexibility:

**Option 1: We Help You Build It**

Some instructors want to create their own content—they just need the right framework and support. We provide:

Training on how to design engaging technical lessons
Templates and frameworks that structure content effectively
Guidance on what actually works for student retention
Tools and resources to produce quality content without being a production company

We empower instructors to create, not replace them.

**Option 2: We Provide Turn-Key Solutions**

Other instructors would rather focus on teaching and let us handle content creation. We get it. So we offer:

Ready-to-use diagnostic scenarios aligned with modern vehicles
Interactive modules customized to your curriculum
Assessment tools that measure real understanding
Professional-quality content you can drop into your classroom

Instructors pick what they need. Some want both. Some focus on one. It's flexible because every program is different.

**The Real Respect**

Here's what matters: A skilled technician educator deserves tools that match their expertise and respect their time. They shouldn't have to become a graphic designer or video editor to be a great teacher. That's not reasonable. It's not sustainable.

When we support educators with the right tools—either by teaching them the skills they need or by providing ready-made content—everyone wins. Students get engaging, modern, effective instruction. Instructors get to focus on their strength: sharing their expertise. Programs produce better graduates.

The technicians transitioning into education aren't lacking skill. They're lacking support. Let's give them the tools they deserve.`
    },
    {
      id: 4,
      title: "AI Won't Replace Technicians—It'll Make Them Superpowers",
      category: "Industry Trends",
      date: "Jan 20, 2026",
      excerpt: "The real story about AI in automotive isn't job elimination—it's solving the technician shortage.",
      image: "/AI Won't Replace Technicians.webp",
      content: `There's a fear in the automotive industry right now. Technicians worry that AI will replace them. Shop owners wonder if investing in AI-assisted tools is just automating themselves out of a workforce. It's a reasonable concern, given how AI has dominated headlines.

But here's the honest truth: that's not what's happening in automotive. Not even close.

The real story is the opposite.

**The Actual Crisis We're Facing**

We don't have too many technicians. We have too few.

The technician shortage is real, measurable, and getting worse. Shops can't fill positions. Experienced techs are overwhelmed. Turn-around times are stretching. Customers are frustrated. The industry is literally constrained by the number of skilled people available to do the work.

In this environment, the question isn't "will AI replace technicians?" It's "how can we help existing technicians do more?"

**What AI Actually Does**

AI-assisted diagnostic tools don't replace the technician. They enhance them.

Here's how it actually works: A customer brings in a vehicle with a check engine light and three other symptoms. Traditionally, the technician spends 2-3 hours running scans, cross-referencing data, pulling up service bulletins, testing theories. They're doing important work, but a lot of it is data processing—work that AI is genuinely good at.

With AI-assisted tools? The system processes that data in minutes. It flags probabilities, highlights relevant service bulletins, suggests diagnostic paths based on millions of previous repair records. The technician reviews the recommendations, applies their expertise, makes the final call, and performs the repair.

Same technician. Same expertise. Same judgment. Dramatically less time spent on busywork.

**The Productivity Math**

Here's why shops are investing in this: if a technician's turn-around time decreases by 30-40%, they fix more cars in the same day. The shop makes more revenue. The technician—especially if they're commission-based—makes more money.

That's not automation. That's liberation.

A technician who would have fixed 4 cars a day now fixes 5-6. A shop with 10 technicians that used to complete 40 repairs daily now completes 50-60. In an industry starved for capacity? That's not just good for business. It's survival.

**Who This Actually Helps**

Think about what this means:

- **Experienced technicians** stop wasting their expertise on tedious data analysis and focus on complex problem-solving. They work smarter, not harder.
- **Newer technicians** get real-time guidance during diagnostics, speeding up their learning curve. They see patterns faster, understand system interactions better.
- **Apprentices** have more experienced techs available to mentor them because the senior techs aren't drowning in diagnostic work.
- **The industry** actually gets more people trained and more cars repaired.

When you reduce the administrative and data-processing burden on technicians, you create capacity for growth. You create time for mentorship. You create space for training the next generation.

That's not replacement. That's scaling.

**The Training Gap**

Here's where ElevatED comes in: most technicians didn't learn how to work alongside AI tools. Neither did many educators.

The AI-assisted diagnostic tool is only as good as the person using it. A technician who doesn't understand how to interpret the recommendations, who doesn't know how to verify the tool's suggestions, who doesn't maintain their core diagnostic skills—that technician won't get the benefit. They might even make mistakes.

That's why training matters. That's why understanding how to leverage AI effectively is now part of being a great technician.

We're building resources to help technicians and instructors learn how to work with these tools effectively. Not to replace traditional skills, but to amplify them. To show that AI and human expertise aren't competitors—they're complementary.

**The Honest Reality**

Yes, some tasks will become automated. Data entry. Routine scanning protocols. Administrative work. But those aren't technician jobs—they're the parts of the job that distract from being a technician.

The core of the work—diagnosis, problem-solving, hands-on repair, critical thinking—that's human work. That's expertise. AI doesn't replace that. It supports it.

In an industry that's desperate for more qualified technicians, the real question isn't "will AI replace them?" It's "how fast can we get technicians trained to work effectively alongside AI so we can actually meet customer demand?"

The answer to that question will determine which shops and training programs thrive over the next five years.`
    }
  ];

  const currentPost = blogPosts[selectedPost];

  return (
    <main style={{ minHeight: '100vh', background: 'linear-gradient(0deg, var(--off-white), #FFFFFF)' }}>
      <section style={{ padding: '80px 0 40px' }}>
        <div className="container">
          <div style={{ marginBottom: '40px' }}>
            <a 
              href="#" 
              onClick={(e) => { e.preventDefault(); navigateToPage('home'); }}
              style={{
                color: 'var(--primary-blue)',
                textDecoration: 'none',
                fontWeight: 600,
                fontSize: '14px',
                display: 'inline-flex',
                alignItems: 'center',
                gap: '4px'
              }}
            >
              ← Back to Home
            </a>
          </div>
          
          <div style={{ maxWidth: '900px' }}>
            <h1 style={{ fontSize: '52px', fontWeight: 900, marginBottom: '16px', color: 'var(--charcoal)', letterSpacing: '-1.5px' }}>
              From the Blog
            </h1>
            <p style={{ fontSize: '18px', color: 'var(--soft-gray)', lineHeight: 1.8 }}>
              Insights, industry updates, and real talk from the ElevatED team about automotive education and training.
            </p>
          </div>
        </div>
      </section>

      <section style={{ padding: '60px 0' }}>
        <div className="container">
          <div style={{ display: 'grid', gridTemplateColumns: '1fr 300px', gap: '48px' }}>
            {/* Main Content */}
            <div>
              {/* Article Header */}
              <article>
                <div style={{ marginBottom: '24px' }}>
                  <div style={{
                    display: 'inline-flex',
                    alignItems: 'center',
                    gap: '12px',
                    marginBottom: '16px'
                  }}>
                    <span style={{
                      fontSize: '12px',
                      fontWeight: 600,
                      color: 'var(--primary-blue)',
                      textTransform: 'uppercase',
                      letterSpacing: '0.5px'
                    }}>
                      {currentPost.category}
                    </span>
                    <span style={{ fontSize: '12px', color: 'var(--steel-gray)' }}>•</span>
                    <span style={{ fontSize: '12px', color: 'var(--steel-gray)' }}>{currentPost.date}</span>
                  </div>
                  
                  <h2 style={{
                    fontSize: '44px',
                    fontWeight: 900,
                    marginBottom: '24px',
                    color: 'var(--charcoal)',
                    lineHeight: 1.2,
                    letterSpacing: '-1px'
                  }}>
                    {currentPost.title}
                  </h2>
                </div>

                {/* Featured Image */}
                {currentPost.image && (
                  <img 
                    src={currentPost.image} 
                    alt={currentPost.title}
                    style={{
                      width: '100%',
                      maxWidth: '750px',
                      height: 'auto',
                      borderRadius: '12px',
                      marginBottom: '32px',
                      objectFit: 'cover'
                    }}
                  />
                )}

                {/* Article Content */}
                <div style={{
                  fontSize: '16px',
                  lineHeight: 1.8,
                  color: 'var(--soft-gray)',
                  maxWidth: '750px'
                }}>
                  {currentPost.content.split('\n\n').map((paragraph, i) => (
                    <p key={i} style={{ marginBottom: '20px' }}>
                      {paragraph}
                    </p>
                  ))}
                </div>
              </article>
            </div>

            {/* Sidebar - Post List */}
            <div>
              <h3 style={{
                fontSize: '16px',
                fontWeight: 700,
                marginBottom: '16px',
                color: 'var(--charcoal)',
                textTransform: 'uppercase',
                letterSpacing: '0.5px'
              }}>
                All Posts
              </h3>
              
              <div style={{ display: 'flex', flexDirection: 'column', gap: '12px' }}>
                {blogPosts.map((post, index) => (
                  <button
                    key={post.id}
                    onClick={() => setSelectedPost(index)}
                    style={{
                      padding: '16px',
                      borderRadius: '12px',
                      background: selectedPost === index ? 'rgba(59, 130, 246, 0.1)' : 'transparent',
                      border: selectedPost === index ? '2px solid rgba(59, 130, 246, 0.3)' : '2px solid rgba(59, 130, 246, 0.1)',
                      cursor: 'pointer',
                      textAlign: 'left',
                      transition: 'all 0.3s',
                      color: selectedPost === index ? 'var(--charcoal)' : 'var(--soft-gray)'
                    }}
                    onMouseOver={(e) => {
                      if (selectedPost !== index) {
                        e.currentTarget.style.background = 'rgba(59, 130, 246, 0.05)';
                      }
                    }}
                    onMouseOut={(e) => {
                      if (selectedPost !== index) {
                        e.currentTarget.style.background = 'transparent';
                      }
                    }}
                  >
                    <div style={{ fontSize: '13px', fontWeight: 600, color: 'var(--primary-blue)', marginBottom: '4px', textTransform: 'uppercase', letterSpacing: '0.5px' }}>
                      {post.category}
                    </div>
                    <div style={{ fontSize: '14px', fontWeight: 700, lineHeight: 1.3 }}>
                      {post.title}
                    </div>
                    <div style={{ fontSize: '12px', color: 'var(--steel-gray)', marginTop: '6px' }}>
                      {post.date}
                    </div>
                  </button>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
};

export default BlogPage;
