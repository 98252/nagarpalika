"use client";

import { useSession, signIn } from "next-auth/react";
import { useRouter } from "next/navigation";
import { useState, useEffect } from "react";
import Link from "next/link";

interface Complaint {
  id: string;
  title: string;
  description: string;
  category: string;
  status: string;
  priority: string;
  location?: string;
  createdAt: string;
  authority?: {
    name: string;
    department: string;
  };
}

export default function UserDashboard() {
  const { data: session, status } = useSession();
  const router = useRouter();
  const [complaints, setComplaints] = useState<Complaint[]>([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    if (status === "loading") return;

    if (!session) {
      // Use NextAuth's signIn function instead of direct redirect
      signIn("github", { callbackUrl: "/user/dashboard" });
      return;
    }

    fetchComplaints();
  }, [session, status]);

  const fetchComplaints = async () => {
    try {
      const response = await fetch("/api/user/complaints");
      if (response.ok) {
        const data = await response.json();
        setComplaints(data);
      }
    } catch (error) {
      console.error("Error fetching complaints:", error);
    } finally {
      setLoading(false);
    }
  };

  const getStatusColor = (status: string) => {
    switch (status) {
      case "PENDING":
        return "bg-[#FFD84C] text-[#222222] border-[#222222]";
      case "ASSIGNED":
        return "bg-[#4A90E2] text-white border-[#222222]";
      case "IN_PROGRESS":
        return "bg-[#F5A623] text-white border-[#222222]";
      case "RESOLVED":
        return "bg-[#7ED321] text-white border-[#222222]";
      case "CLOSED":
        return "bg-[#9B9B9B] text-white border-[#222222]";
      default:
        return "bg-[#9B9B9B] text-white border-[#222222]";
    }
  };

  const getPriorityColor = (priority: string) => {
    switch (priority) {
      case "LOW":
        return "bg-[#7ED321] text-white border-[#222222]";
      case "MEDIUM":
        return "bg-[#F5A623] text-white border-[#222222]";
      case "HIGH":
        return "bg-[#FF6B6B] text-white border-[#222222]";
      case "URGENT":
        return "bg-[#D0021B] text-white border-[#222222]";
      default:
        return "bg-[#9B9B9B] text-white border-[#222222]";
    }
  };

  const getStatusIcon = (status: string) => {
    switch (status) {
      case "PENDING":
        return (
          <svg
            className='w-5 h-5'
            fill='none'
            stroke='currentColor'
            viewBox='0 0 24 24'
          >
            <path
              strokeLinecap='round'
              strokeLinejoin='round'
              strokeWidth={2}
              d='M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z'
            />
          </svg>
        );
      case "ASSIGNED":
        return (
          <svg
            className='w-5 h-5'
            fill='none'
            stroke='currentColor'
            viewBox='0 0 24 24'
          >
            <path
              strokeLinecap='round'
              strokeLinejoin='round'
              strokeWidth={2}
              d='M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z'
            />
          </svg>
        );
      case "IN_PROGRESS":
        return (
          <svg
            className='w-5 h-5'
            fill='none'
            stroke='currentColor'
            viewBox='0 0 24 24'
          >
            <path
              strokeLinecap='round'
              strokeLinejoin='round'
              strokeWidth={2}
              d='M13 10V3L4 14h7v7l9-11h-7z'
            />
          </svg>
        );
      case "RESOLVED":
        return (
          <svg
            className='w-5 h-5'
            fill='none'
            stroke='currentColor'
            viewBox='0 0 24 24'
          >
            <path
              strokeLinecap='round'
              strokeLinejoin='round'
              strokeWidth={2}
              d='M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z'
            />
          </svg>
        );
      case "CLOSED":
        return (
          <svg
            className='w-5 h-5'
            fill='none'
            stroke='currentColor'
            viewBox='0 0 24 24'
          >
            <path
              strokeLinecap='round'
              strokeLinejoin='round'
              strokeWidth={2}
              d='M6 18L18 6M6 6l12 12'
            />
          </svg>
        );
      default:
        return (
          <svg
            className='w-5 h-5'
            fill='none'
            stroke='currentColor'
            viewBox='0 0 24 24'
          >
            <path
              strokeLinecap='round'
              strokeLinejoin='round'
              strokeWidth={2}
              d='M9 5H7a2 2 0 00-2 2v10a2 2 0 002 2h8a2 2 0 002-2V7a2 2 0 00-2-2h-2M9 5a2 2 0 002 2h2a2 2 0 002-2M9 5a2 2 0 012-2h2a2 2 0 012 2'
            />
          </svg>
        );
    }
  };

  if (status === "loading" || loading) {
    return (
      <div className='min-h-screen bg-[#F5F5F5] flex items-center justify-center'>
        <div className='neo-card neo-text-center'>
          <div className='w-16 h-16 bg-[#FFD84C] border-4 border-[#222222] mx-auto mb-4 flex items-center justify-center animate-spin'>
            <svg
              className='w-8 h-8 text-[#222222]'
              fill='none'
              stroke='currentColor'
              viewBox='0 0 24 24'
            >
              <path
                strokeLinecap='round'
                strokeLinejoin='round'
                strokeWidth={2}
                d='M4 4v5h.582m15.356 2A8.001 8.001 0 004.582 9m0 0H9m11 11v-5h-.581m0 0a8.003 8.003 0 01-15.357-2m15.357 2H15'
              />
            </svg>
          </div>
          <p className='neo-subheading text-[#222222]'>
            Loading your dashboard...
          </p>
        </div>
      </div>
    );
  }

  const stats = {
    total: complaints.length,
    pending: complaints.filter((c) => c.status === "PENDING").length,
    inProgress: complaints.filter((c) => c.status === "IN_PROGRESS").length,
    resolved: complaints.filter((c) => c.status === "RESOLVED").length,
  };

  return (
    <div className='min-h-screen bg-[#F5F5F5]'>
      {/* Navigation */}
      <nav className='neo-nav'>
        <div className='neo-container'>
          <div className='neo-flex-between'>
            <Link href='/' className='neo-nav-link neo-heading-h3'>
              NagarPalika
            </Link>
            <div className='neo-flex'>
              <span className='neo-nav-link neo-mr-md'>
                Welcome, {session?.user?.name}
              </span>
              <Link href='/api/auth/signout' className='neo-button-primary'>
                <svg
                  className='w-4 h-4 mr-2'
                  fill='none'
                  stroke='currentColor'
                  viewBox='0 0 24 24'
                >
                  <path
                    strokeLinecap='round'
                    strokeLinejoin='round'
                    strokeWidth={2}
                    d='M17 16l4-4m0 0l-4-4m4 4H7m6 4v1a3 3 0 01-3 3H6a3 3 0 01-3-3V7a3 3 0 013-3h4a3 3 0 013 3v1'
                  />
                </svg>
                Sign Out
              </Link>
            </div>
          </div>
        </div>
      </nav>

      <div className='neo-container neo-mt-lg'>
        {/* Header */}
        <div className='neo-mb-xl'>
          <div className='neo-flex-between'>
            <div>
              <h1 className='neo-heading-h2 text-[#222222] neo-mb-sm'>
                My Complaints
              </h1>
              <p className='neo-body text-[#111111]'>
                Track and manage your civic complaints
              </p>
            </div>
            <Link href='/user/complaints/new' className='neo-button-primary'>
              <svg
                className='w-5 h-5 mr-2'
                fill='none'
                stroke='currentColor'
                viewBox='0 0 24 24'
              >
                <path
                  strokeLinecap='round'
                  strokeLinejoin='round'
                  strokeWidth={2}
                  d='M12 6v6m0 0v6m0-6h6m-6 0H6'
                />
              </svg>
              File New Complaint
            </Link>
          </div>
        </div>

        {/* Stats Cards */}
        <div
          className='neo-grid neo-mb-xl'
          style={{
            gridTemplateColumns: "repeat(auto-fit, minmax(200px, 1fr))",
            gap: "var(--spacing-lg)",
          }}
        >
          <div className='neo-card neo-text-center'>
            <div className='w-12 h-12 bg-[#FFD84C] border-4 border-[#222222] mx-auto mb-4 flex items-center justify-center'>
              <svg
                className='w-6 h-6 text-[#222222]'
                fill='none'
                stroke='currentColor'
                viewBox='0 0 24 24'
              >
                <path
                  strokeLinecap='round'
                  strokeLinejoin='round'
                  strokeWidth={2}
                  d='M9 5H7a2 2 0 00-2 2v10a2 2 0 002 2h8a2 2 0 002-2V7a2 2 0 00-2-2h-2M9 5a2 2 0 002 2h2a2 2 0 002-2M9 5a2 2 0 012-2h2a2 2 0 012 2'
                />
              </svg>
            </div>
            <div className='neo-heading-h3 text-[#222222] neo-mb-sm'>
              {stats.total}
            </div>
            <div className='neo-subheading text-[#222222]'>
              Total Complaints
            </div>
          </div>

          <div className='neo-card neo-text-center'>
            <div className='w-12 h-12 bg-[#FFD84C] border-4 border-[#222222] mx-auto mb-4 flex items-center justify-center'>
              <svg
                className='w-6 h-6 text-[#222222]'
                fill='none'
                stroke='currentColor'
                viewBox='0 0 24 24'
              >
                <path
                  strokeLinecap='round'
                  strokeLinejoin='round'
                  strokeWidth={2}
                  d='M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z'
                />
              </svg>
            </div>
            <div className='neo-heading-h3 text-[#222222] neo-mb-sm'>
              {stats.pending}
            </div>
            <div className='neo-subheading text-[#222222]'>Pending</div>
          </div>

          <div className='neo-card neo-text-center'>
            <div className='w-12 h-12 bg-[#FFD84C] border-4 border-[#222222] mx-auto mb-4 flex items-center justify-center'>
              <svg
                className='w-6 h-6 text-[#222222]'
                fill='none'
                stroke='currentColor'
                viewBox='0 0 24 24'
              >
                <path
                  strokeLinecap='round'
                  strokeLinejoin='round'
                  strokeWidth={2}
                  d='M13 10V3L4 14h7v7l9-11h-7z'
                />
              </svg>
            </div>
            <div className='neo-heading-h3 text-[#222222] neo-mb-sm'>
              {stats.inProgress}
            </div>
            <div className='neo-subheading text-[#222222]'>In Progress</div>
          </div>

          <div className='neo-card neo-text-center'>
            <div className='w-12 h-12 bg-[#FFD84C] border-4 border-[#222222] mx-auto mb-4 flex items-center justify-center'>
              <svg
                className='w-6 h-6 text-[#222222]'
                fill='none'
                stroke='currentColor'
                viewBox='0 0 24 24'
              >
                <path
                  strokeLinecap='round'
                  strokeLinejoin='round'
                  strokeWidth={2}
                  d='M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z'
                />
              </svg>
            </div>
            <div className='neo-heading-h3 text-[#222222] neo-mb-sm'>
              {stats.resolved}
            </div>
            <div className='neo-subheading text-[#222222]'>Resolved</div>
          </div>
        </div>

        {/* Complaints List */}
        <div className='neo-mb-xl'>
          {complaints.length === 0 ? (
            <div className='neo-card neo-text-center'>
              <div className='w-24 h-24 bg-[#FFD84C] border-4 border-[#222222] mx-auto mb-6 flex items-center justify-center'>
                <svg
                  className='w-12 h-12 text-[#222222]'
                  fill='none'
                  stroke='currentColor'
                  viewBox='0 0 24 24'
                >
                  <path
                    strokeLinecap='round'
                    strokeLinejoin='round'
                    strokeWidth={2}
                    d='M9 5H7a2 2 0 00-2 2v10a2 2 0 002 2h8a2 2 0 002-2V7a2 2 0 00-2-2h-2M9 5a2 2 0 002 2h2a2 2 0 002-2M9 5a2 2 0 012-2h2a2 2 0 012 2'
                  />
                </svg>
              </div>
              <h3 className='neo-heading-h3 neo-mb-sm text-[#222222]'>
                No complaints yet
              </h3>
              <p className='neo-body neo-mb-lg text-[#111111]'>
                Get started by filing your first complaint to improve your
                community.
              </p>
              <Link href='/user/complaints/new' className='neo-button-primary'>
                File Your First Complaint
              </Link>
            </div>
          ) : (
            <div className='neo-grid' style={{ gap: "var(--spacing-lg)" }}>
              {complaints.map((complaint) => (
                <div
                  key={complaint.id}
                  className='neo-card hover:scale-105 transition-transform duration-300'
                >
                  <div className='neo-flex-between neo-mb-md'>
                    <h3 className='neo-card-title'>{complaint.title}</h3>
                    <div
                      className='neo-flex'
                      style={{ gap: "var(--spacing-sm)" }}
                    >
                      <span
                        className={`neo-label px-3 py-1 border-2 ${getPriorityColor(
                          complaint.priority
                        )}`}
                      >
                        {complaint.priority}
                      </span>
                      <span
                        className={`neo-label px-3 py-1 border-2 ${getStatusColor(
                          complaint.status
                        )} flex items-center`}
                      >
                        {getStatusIcon(complaint.status)}
                        <span className='ml-1'>
                          {complaint.status.replace("_", " ")}
                        </span>
                      </span>
                    </div>
                  </div>

                  <p className='neo-card-body neo-mb-md'>
                    {complaint.description}
                  </p>

                  <div
                    className='neo-grid neo-mb-md'
                    style={{
                      gridTemplateColumns:
                        "repeat(auto-fit, minmax(150px, 1fr))",
                      gap: "var(--spacing-sm)",
                    }}
                  >
                    <div className='neo-text-center neo-p-sm bg-[#F5F5F5] border-2 border-[#222222]'>
                      <div className='neo-label text-[#222222]'>Category</div>
                      <div className='neo-body text-[#111111]'>
                        {complaint.category}
                      </div>
                    </div>
                    {complaint.location && (
                      <div className='neo-text-center neo-p-sm bg-[#F5F5F5] border-2 border-[#222222]'>
                        <div className='neo-label text-[#222222]'>Location</div>
                        <div className='neo-body text-[#111111]'>
                          {complaint.location}
                        </div>
                      </div>
                    )}
                    <div className='neo-text-center neo-p-sm bg-[#F5F5F5] border-2 border-[#222222]'>
                      <div className='neo-label text-[#222222]'>Filed On</div>
                      <div className='neo-body text-[#111111]'>
                        {new Date(complaint.createdAt).toLocaleDateString()}
                      </div>
                    </div>
                  </div>

                  {complaint.authority && (
                    <div className='neo-card-footer'>
                      <div className='neo-flex items-center'>
                        <div className='w-8 h-8 bg-[#FFD84C] border-2 border-[#222222] mr-3 flex items-center justify-center'>
                          <svg
                            className='w-4 h-4 text-[#222222]'
                            fill='none'
                            stroke='currentColor'
                            viewBox='0 0 24 24'
                          >
                            <path
                              strokeLinecap='round'
                              strokeLinejoin='round'
                              strokeWidth={2}
                              d='M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z'
                            />
                          </svg>
                        </div>
                        <div>
                          <div className='neo-subheading text-[#222222]'>
                            Assigned to: {complaint.authority.name}
                          </div>
                          <div className='neo-caption text-[#222222]'>
                            {complaint.authority.department}
                          </div>
                        </div>
                      </div>
                    </div>
                  )}
                </div>
              ))}
            </div>
          )}
        </div>
      </div>
    </div>
  );
}
