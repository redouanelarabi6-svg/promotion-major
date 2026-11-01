
export default function Home() {
  return (
    <main className="dashboard">
      <aside className="sidebar">
        <h2 className="logo">PM<span>.</span></h2>
        <p className="menu-title">MAIN MENU</p>

        <nav>
          <a className="active" href="#">⌂ Dashboard</a>
          <a href="#">▣ My Studies</a>
          <a href="#">✦ PM Intelligence</a>
          <a href="#">▦ Exam Planner</a>
          <a href="#">◈ My Progress</a>
          <a href="#">⚙ Settings</a>
        </nav>

        <div className="sidebar-bottom">
          <span>Promotion Major</span>
          <small>Your Major. Your Progress. Your Future.</small>
        </div>
      </aside>

      <section className="main-content">
        <header className="topbar">
          <span>Student Workspace</span>
          <span className="avatar">S</span>
        </header>

        <div className="welcome">
          <p>YOUR ACADEMIC JOURNEY</p>
          <h1>Welcome to Promotion Major.</h1>
          <span>
            Everything you need to organize your studies
            and achieve your goals.
          </span>
        </div>

        <div className="stats">
          <article className="stat-card">
            <span>My Subjects</span>
            <strong>0</strong>
            <small>Organize your modules</small>
          </article>

          <article className="stat-card">
            <span>Study Progress</span>
            <strong>0%</strong>
            <small>Keep moving forward</small>
          </article>

          <article className="stat-card">
            <span>Upcoming Exams</span>
            <strong>0</strong>
            <small>Stay prepared</small>
          </article>
        </div>

        <div className="bottom-grid">
          <article className="panel">
            <h2>My Studies</h2>
            <p>Your courses, TD and TP files in one place.</p>
            <button>Explore My Studies →</button>
          </article>

          <article className="panel ai-panel">
            <h2>PM Intelligence ✦</h2>
            <p>Your personal AI assistant for university learning.</p>
            <button>Ask AI Assistant →</button>
          </article>
        </div>

        <footer>© 2026 Promotion Major. Built for your future.</footer>
      </section>
    </main>
  );
}
