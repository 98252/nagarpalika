"use client";

import { useState, useEffect } from "react";
import { useRouter } from "next/navigation";
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
  user: {
    name: string;
    email: string;
  };
  authority?: {
    id: string;
    name: string;
    department: string;
  };
}

interface Authority {
  id: string;
  name: string;
  email: string;
  department: string;
  phone?: string;
  isActive: boolean;
  _count: {
    complaints: number;
  };
}

interface Stats {
  totalComplaints: number;
  pendingComplaints: number;
  resolvedComplaints: number;
  totalAuthorities: number;
}

export default function AdminDashboard() {
  const router = useRouter();
  const [complaints, setComplaints] = useState<Complaint[]>([]);
  const [authorities, setAuthorities] = useState<Authority[]>([]);
  const [stats, setStats] = useState<Stats>({
    totalComplaints: 0,
    pendingComplaints: 0,
    resolvedComplaints: 0,
    totalAuthorities: 0,
  });
  const [loading, setLoading] = useState(true);
  const [activeTab, setActiveTab] = useState("complaints");

  useEffect(() => {
    const token = localStorage.getItem("adminToken");
    const adminData = localStorage.getItem("adminData");

    if (!token || !adminData) {
      router.push("/admin/login");
      return;
    }

    // Verify token format (basic check)
    try {
      const decoded = Buffer.from(token, "base64").toString();
      if (!decoded.includes(":")) {
        localStorage.removeItem("adminToken");
        localStorage.removeItem("adminData");
        router.push("/admin/login");
        return;
      }
    } catch (error) {
      localStorage.removeItem("adminToken");
      localStorage.removeItem("adminData");
      router.push("/admin/login");
      return;
    }

    fetchData();
  }, []);

  const fetchData = async () => {
    try {
      const [complaintsRes, authoritiesRes, statsRes] = await Promise.all([
        fetch("/api/admin/complaints"),
        fetch("/api/admin/authorities"),
        fetch("/api/admin/stats"),
      ]);

      if (complaintsRes.ok) {
        const complaintsData = await complaintsRes.json();
        setComplaints(complaintsData);
      }

      if (authoritiesRes.ok) {
        const authoritiesData = await authoritiesRes.json();
        setAuthorities(authoritiesData);
      }

      if (statsRes.ok) {
        const statsData = await statsRes.json();
        setStats(statsData);
      }
    } catch (error) {
      console.error("Error fetching data:", error);
    } finally {
      setLoading(false);
    }
  };

  const handleStatusChange = async (complaintId: string, newStatus: string) => {
    try {
      const response = await fetch(
        `/api/admin/complaints/${complaintId}/status`,
        {
          method: "PATCH",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify({ status: newStatus }),
        }
      );

      if (response.ok) {
        fetchData(); // Refresh data
      }
    } catch (error) {
      console.error("Error updating status:", error);
    }
  };

  const handleAssignAuthority = async (
    complaintId: string,
    authorityId: string
  ) => {
    try {
      const response = await fetch(
        `/api/admin/complaints/${complaintId}/assign`,
        {
          method: "PATCH",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify({ authorityId }),
        }
      );

      if (response.ok) {
        fetchData(); // Refresh data
      }
    } catch (error) {
      console.error("Error assigning authority:", error);
    }
  };

  const handleLogout = () => {
    localStorage.removeItem("adminToken");
    localStorage.removeItem("adminData");
    // Clear the cookie by setting it to expire
    document.cookie =
      "adminToken=; expires=Thu, 01 Jan 1970 00:00:00 UTC; path=/;";
    router.push("/admin/login");
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

  if (loading) {
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
            Loading admin dashboard...
          </p>
        </div>
      </div>
    );
  }

  return (
    <div className='min-h-screen bg-[#F5F5F5]'>
      {/* Navigation */}
      <nav className='neo-nav'>
        <div className='neo-container'>
          <div className='neo-flex-between'>
            <Link href='/' className='neo-nav-link neo-heading-h3'>
              NagarPalika Admin
            </Link>
            <div className='neo-flex'>
              <button onClick={handleLogout} className='neo-button-primary'>
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
                Logout
              </button>
            </div>
          </div>
        </div>
      </nav>

      <div className='neo-container neo-mt-lg'>
        {/* Stats */}
        <div className='neo-mb-xl'>
          <h1 className='neo-heading-h2 text-[#222222] neo-mb-lg'>
            Admin Dashboard
          </h1>
          <div
            className='neo-grid'
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
                {stats.totalComplaints}
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
                {stats.pendingComplaints}
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
                    d='M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z'
                  />
                </svg>
              </div>
              <div className='neo-heading-h3 text-[#222222] neo-mb-sm'>
                {stats.resolvedComplaints}
              </div>
              <div className='neo-subheading text-[#222222]'>Resolved</div>
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
                    d='M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z'
                  />
                </svg>
              </div>
              <div className='neo-heading-h3 text-[#222222] neo-mb-sm'>
                {stats.totalAuthorities}
              </div>
              <div className='neo-subheading text-[#222222]'>Authorities</div>
            </div>
          </div>
        </div>

        {/* Tabs */}
        <div className='neo-mb-xl'>
          <div className='neo-card'>
            <div className='neo-flex' style={{ gap: "var(--spacing-md)" }}>
              <button
                onClick={() => setActiveTab("complaints")}
                className={`neo-button-secondary ${
                  activeTab === "complaints"
                    ? "bg-[#FFD84C] text-[#222222]"
                    : ""
                }`}
              >
                Complaints
              </button>
              <button
                onClick={() => setActiveTab("authorities")}
                className={`neo-button-secondary ${
                  activeTab === "authorities"
                    ? "bg-[#FFD84C] text-[#222222]"
                    : ""
                }`}
              >
                Authorities
              </button>
            </div>
          </div>

          {/* Complaints Tab */}
          {activeTab === "complaints" && (
            <div className='neo-mt-lg'>
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
                          )}`}
                        >
                          {complaint.status.replace("_", " ")}
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
                        <div className='neo-label text-[#222222]'>By</div>
                        <div className='neo-body text-[#111111]'>
                          {complaint.user.name}
                        </div>
                      </div>
                      <div className='neo-text-center neo-p-sm bg-[#F5F5F5] border-2 border-[#222222]'>
                        <div className='neo-label text-[#222222]'>Category</div>
                        <div className='neo-body text-[#111111]'>
                          {complaint.category}
                        </div>
                      </div>
                      {complaint.location && (
                        <div className='neo-text-center neo-p-sm bg-[#F5F5F5] border-2 border-[#222222]'>
                          <div className='neo-label text-[#222222]'>
                            Location
                          </div>
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

                    <div className='neo-card-footer'>
                      <div
                        className='neo-grid'
                        style={{
                          gridTemplateColumns: "1fr 1fr",
                          gap: "var(--spacing-md)",
                        }}
                      >
                        <div>
                          <label className='neo-label text-[#222222] neo-mb-sm block'>
                            Status
                          </label>
                          <select
                            value={complaint.status}
                            onChange={(e) =>
                              handleStatusChange(complaint.id, e.target.value)
                            }
                            className='neo-select'
                          >
                            <option value='PENDING'>Pending</option>
                            <option value='ASSIGNED'>Assigned</option>
                            <option value='IN_PROGRESS'>In Progress</option>
                            <option value='RESOLVED'>Resolved</option>
                            <option value='CLOSED'>Closed</option>
                          </select>
                        </div>
                        <div>
                          <label className='neo-label text-[#222222] neo-mb-sm block'>
                            Assign Authority
                          </label>
                          <select
                            value={complaint.authority?.id || ""}
                            onChange={(e) =>
                              handleAssignAuthority(
                                complaint.id,
                                e.target.value
                              )
                            }
                            className='neo-select'
                          >
                            <option value=''>Select Authority</option>
                            {authorities.map((authority) => (
                              <option key={authority.id} value={authority.id}>
                                {authority.name} ({authority.department})
                              </option>
                            ))}
                          </select>
                        </div>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          )}

          {/* Authorities Tab */}
          {activeTab === "authorities" && (
            <div className='neo-mt-lg'>
              <div className='neo-flex-between neo-mb-lg'>
                <h2 className='neo-heading-h3 text-[#222222]'>
                  Manage Authorities
                </h2>
                <Link
                  href='/admin/authorities/new'
                  className='neo-button-primary'
                >
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
                  Add Authority
                </Link>
              </div>

              <div className='neo-grid' style={{ gap: "var(--spacing-lg)" }}>
                {authorities.map((authority) => (
                  <div
                    key={authority.id}
                    className='neo-card hover:scale-105 transition-transform duration-300'
                  >
                    <div className='neo-flex-between neo-mb-md'>
                      <div className='neo-flex items-center'>
                        <div className='w-12 h-12 bg-[#FFD84C] border-4 border-[#222222] mr-4 flex items-center justify-center'>
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
                              d='M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z'
                            />
                          </svg>
                        </div>
                        <div>
                          <h3 className='neo-card-title'>{authority.name}</h3>
                          <p className='neo-body text-[#111111]'>
                            {authority.email}
                          </p>
                        </div>
                      </div>
                      <div
                        className='neo-flex items-center'
                        style={{ gap: "var(--spacing-sm)" }}
                      >
                        <span
                          className={`neo-label px-3 py-1 border-2 ${
                            authority.isActive
                              ? "bg-[#7ED321] text-white border-[#222222]"
                              : "bg-[#9B9B9B] text-white border-[#222222]"
                          }`}
                        >
                          {authority.isActive ? "Active" : "Inactive"}
                        </span>
                        <Link
                          href={`/admin/authorities/${authority.id}/edit`}
                          className='neo-button-secondary'
                        >
                          Edit
                        </Link>
                      </div>
                    </div>

                    <div
                      className='neo-grid neo-mb-md'
                      style={{
                        gridTemplateColumns:
                          "repeat(auto-fit, minmax(150px, 1fr))",
                        gap: "var(--spacing-sm)",
                      }}
                    >
                      <div className='neo-text-center neo-p-sm bg-[#F5F5F5] border-2 border-[#222222]'>
                        <div className='neo-label text-[#222222]'>
                          Department
                        </div>
                        <div className='neo-body text-[#111111]'>
                          {authority.department}
                        </div>
                      </div>
                      <div className='neo-text-center neo-p-sm bg-[#F5F5F5] border-2 border-[#222222]'>
                        <div className='neo-label text-[#222222]'>Assigned</div>
                        <div className='neo-body text-[#111111]'>
                          {authority._count.complaints} complaints
                        </div>
                      </div>
                      {authority.phone && (
                        <div className='neo-text-center neo-p-sm bg-[#F5F5F5] border-2 border-[#222222]'>
                          <div className='neo-label text-[#222222]'>Phone</div>
                          <div className='neo-body text-[#111111]'>
                            {authority.phone}
                          </div>
                        </div>
                      )}
                    </div>
                  </div>
                ))}
              </div>
            </div>
          )}
        </div>
      </div>
    </div>
  );
}
