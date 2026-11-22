"use client";

import { useState } from "react";
import { CalendarDays, Check, Clock3, X } from "lucide-react";

const initial = [
  ["Aarav Mehta", "CC10241", "Computer Science"],
  ["Diya Kapoor", "CC10242", "Data Science"],
  ["Kabir Singh", "CC10243", "Business Admin"],
  ["Ananya Rao", "CC10244", "Computer Science"],
  ["Ishaan Gupta", "CC10245", "Mechanical Eng."],
  ["Meera Joshi", "CC10246", "Psychology"],
];

export default function AttendancePage() {
  const [records, setRecords] = useState({});
  const [date, setDate] = useState("2026-11-05");
  const presentCount =
    Object.values(records).filter((status) => status === "Present").length +
    278;
  const absentCount =
    Object.values(records).filter((status) => status === "Absent").length + 12;

  function markAttendance(id, status) {
    setRecords((currentRecords) => ({
      ...currentRecords,
      [id]: status,
    }));
  }

  return (
    <div className="page-wrap">
      <div className="page-title-row">
        <div>
          <p className="eyebrow">CAMPUS OPERATIONS</p>
          <h1>Attendance</h1>
          <p className="muted">Track and manage daily student attendance.</p>
        </div>
        <div className="date-field">
          <CalendarDays size={17} />
          <input
            type="date"
            value={date}
            onChange={(event) => setDate(event.target.value)}
          />
        </div>
      </div>

      <div className="stats-grid compact-stats">
        <article className="stat-card">
          <span className="muted">Total students</span>
          <strong>2,845</strong>
        </article>
        <article className="stat-card">
          <span className="muted">Present today</span>
          <strong className="green-text">{presentCount}</strong>
        </article>
        <article className="stat-card">
          <span className="muted">Absent today</span>
          <strong className="red-text">{absentCount}</strong>
        </article>
        <article className="stat-card">
          <span className="muted">Not marked</span>
          <strong>0</strong>
        </article>
      </div>

      <section className="panel table-panel">
        <div className="panel-heading">
          <div>
            <h2>Mark attendance</h2>
            <p className="muted">
              Select present or absent for each student · {date}
            </p>
          </div>
          <span className="status active">
            <Clock3 size={13} /> Live session
          </span>
        </div>

        <div className="table-scroll">
          <table>
            <thead>
              <tr>
                <th>STUDENT</th>
                <th>STUDENT ID</th>
                <th>COURSE</th>
                <th>ATTENDANCE</th>
              </tr>
            </thead>
            <tbody>
              {initial.map(([name, id, course], index) => {
                const status = records[id] ?? "Present";

                return (
                  <tr key={id}>
                    <td>
                      <div className="person-cell">
                        <span className={`avatar avatar-${index}`}>
                          {name
                            .split(" ")
                            .map((part) => part[0])
                            .join("")}
                        </span>
                        <b>{name}</b>
                      </div>
                    </td>
                    <td>{id}</td>
                    <td>{course}</td>
                    <td>
                      <div className="attendance-actions">
                        <button
                          className={
                            status === "Present"
                              ? "choice present selected"
                              : "choice present"
                          }
                          onClick={() => markAttendance(id, "Present")}
                        >
                          <Check size={14} /> Present
                        </button>
                        <button
                          className={
                            status === "Absent"
                              ? "choice absent selected"
                              : "choice absent"
                          }
                          onClick={() => markAttendance(id, "Absent")}
                        >
                          <X size={14} /> Absent
                        </button>
                      </div>
                    </td>
                  </tr>
                );
              })}
            </tbody>
          </table>
        </div>
      </section>
    </div>
  );
}
