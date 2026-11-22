import { ArrowUpRight, BookOpen, CalendarCheck, GraduationCap, Users, Clock3, MoreHorizontal } from "lucide-react";
import { students, courses, activity } from "@/lib/data";

const stats = [
  { label: "Total students", value: "2,845", change: "+12.8%", icon: Users, tone: "violet" },
  { label: "Active courses", value: "36", change: "+4.2%", icon: BookOpen, tone: "blue" },
  { label: "Attendance rate", value: "94.6%", change: "+2.1%", icon: CalendarCheck, tone: "green" },
  { label: "Faculty members", value: "128", change: "+6.4%", icon: GraduationCap, tone: "orange" }
];

export default function Dashboard() {
  return (
    <div className="page-wrap">
      <div className="welcome-row">
        <div><p className="eyebrow">THURSDAY, NOVEMBER 5, 2026</p><h1>Good afternoon, Admin <span className="wave">✦</span></h1><p className="muted">Here’s what’s happening across your campus today.</p></div>
        <button className="primary-btn" onClick={undefined}><span>＋</span> Add new student</button>
      </div>
      <section className="stats-grid">
        {stats.map(({label,value,change,icon:Icon,tone}) => <article className="stat-card" key={label}><div className="stat-top"><span>{label}</span><span className={`stat-icon ${tone}`}><Icon size={19}/></span></div><div className="stat-bottom"><strong>{value}</strong><span className="positive">{change} <small>vs last month</small></span></div></article>)}
      </section>
      <section className="dashboard-grid">
        <article className="panel attendance-panel">
          <div className="panel-heading"><div><h2>Attendance overview</h2><p className="muted">Average attendance this semester</p></div><button className="icon-btn"><MoreHorizontal size={20}/></button></div>
          <div className="attendance-summary"><div><strong>94.6<span>%</span></strong><p className="positive">↑ 2.1% <small>compared to last month</small></p></div><div className="donut"><div><b>94.6%</b><small>Present</small></div></div></div>
          <div className="chart" aria-label="Attendance trend chart"><div className="chart-y"><span>100%</span><span>75%</span><span>50%</span><span>25%</span><span>0%</span></div><div className="chart-main"><div className="grid-lines"><i/><i/><i/><i/><i/></div><svg viewBox="0 0 620 180" preserveAspectRatio="none"><defs><linearGradient id="area" x1="0" x2="0" y1="0" y2="1"><stop offset="0%" stopColor="#7865e9" stopOpacity=".22"/><stop offset="100%" stopColor="#7865e9" stopOpacity="0"/></linearGradient></defs><path d="M0 120 C40 110 48 85 90 93 S145 115 185 82 S245 92 280 62 S340 82 375 56 S440 74 470 43 S540 65 575 30 S600 36 620 20 L620 180 L0 180Z" fill="url(#area)"/><path d="M0 120 C40 110 48 85 90 93 S145 115 185 82 S245 92 280 62 S340 82 375 56 S440 74 470 43 S540 65 575 30 S600 36 620 20" fill="none" stroke="#7865e9" strokeWidth="3" strokeLinecap="round"/></svg><div className="chart-x"><span>Jun</span><span>Jul</span><span>Aug</span><span>Sep</span><span>Oct</span><span>Nov</span></div></div></div>
        </article>
        <article className="panel schedule-panel">
          <div className="panel-heading"><div><h2>Today’s schedule</h2><p className="muted">Thursday, 5 November</p></div><button className="text-btn">View calendar <ArrowUpRight size={15}/></button></div>
          <div className="schedule-list"><div className="schedule-item"><span className="time">09:00<br/><small>AM</small></span><span className="schedule-mark purple"></span><div><b>Data Structures</b><p>Room A-204 · Computer Science</p></div></div><div className="schedule-item"><span className="time">11:30<br/><small>AM</small></span><span className="schedule-mark blue"></span><div><b>Database Management</b><p>Lab 03 · Computer Science</p></div></div><div className="schedule-item"><span className="time">02:00<br/><small>PM</small></span><span className="schedule-mark orange"></span><div><b>Faculty meeting</b><p>Conference room · Main block</p></div></div></div>
        </article>
      </section>
      <section className="panel table-panel">
        <div className="panel-heading"><div><h2>Recently enrolled students</h2><p className="muted">Latest additions to your campus</p></div><a className="text-btn" href="/students">View all students <ArrowUpRight size={15}/></a></div>
        <div className="table-scroll"><table><thead><tr><th>STUDENT</th><th>STUDENT ID</th><th>COURSE</th><th>YEAR</th><th>STATUS</th></tr></thead><tbody>{students.slice(0,4).map(s=><tr key={s.id}><td><div className="person-cell"><span className={`avatar ${s.color}`}>{s.initials}</span><span><b>{s.name}</b><small>{s.email}</small></span></div></td><td>{s.id}</td><td>{s.course}</td><td>{s.year}</td><td><span className="status active">Active</span></td></tr>)}</tbody></table></div>
      </section>
    </div>
  );
}
