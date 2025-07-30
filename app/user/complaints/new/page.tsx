"use client";

import { useSession, signIn } from "next-auth/react";
import { useRouter } from "next/navigation";
import { useState, useEffect } from "react";
import Link from "next/link";

export default function NewComplaint() {
  const { data: session, status } = useSession();
  const router = useRouter();
  const [loading, setLoading] = useState(false);
  const [formData, setFormData] = useState({
    title: "",
    description: "",
    category: "",
    location: "",
    priority: "MEDIUM",
  });

  useEffect(() => {
    if (status === "loading") return;

    if (!session) {
      // Use NextAuth's signIn function instead of direct redirect
      signIn("github", { callbackUrl: "/user/complaints/new" });
      return;
    }
  }, [session, status]);

  if (status === "loading") {
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
          <p className='neo-subheading text-[#222222]'>Loading...</p>
        </div>
      </div>
    );
  }

  if (!session) {
    return (
      <div className='min-h-screen bg-[#F5F5F5] flex items-center justify-center'>
        <div className='neo-card neo-text-center'>
          <div className='w-16 h-16 bg-[#FFD84C] border-4 border-[#222222] mx-auto mb-4 flex items-center justify-center'>
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
                d='M12 15v2m-6 4h12a2 2 0 002-2v-6a2 2 0 00-2-2H6a2 2 0 00-2 2v6a2 2 0 002 2zm10-10V7a4 4 0 00-8 0v4h8z'
              />
            </svg>
          </div>
          <p className='neo-subheading text-[#222222] neo-mb-lg'>
            Authentication Required
          </p>
          <p className='neo-body text-[#111111] neo-mb-lg'>
            Please sign in to file a complaint
          </p>
          <button
            onClick={() =>
              signIn("github", { callbackUrl: "/user/complaints/new" })
            }
            className='neo-button-primary'
          >
            Sign In
          </button>
        </div>
      </div>
    );
  }

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);

    try {
      const response = await fetch("/api/user/complaints", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(formData),
      });

      if (response.ok) {
        router.push("/user/dashboard");
      } else {
        const error = await response.json();
        alert(error.message || "Failed to create complaint");
      }
    } catch (error) {
      console.error("Error creating complaint:", error);
      alert("Failed to create complaint");
    } finally {
      setLoading(false);
    }
  };

  const handleChange = (
    e: React.ChangeEvent<
      HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement
    >
  ) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
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
              <Link
                href='/user/dashboard'
                className='neo-button-secondary neo-mr-md'
              >
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
                    d='M9 19v-6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h8a2 2 0 002-2V7a2 2 0 00-2-2h-2M9 5a2 2 0 002 2h2a2 2 0 002-2M9 5a2 2 0 012-2h2a2 2 0 012 2'
                  />
                </svg>
                Dashboard
              </Link>
              <span className='neo-nav-link'>
                Welcome, {session?.user?.name}
              </span>
            </div>
          </div>
        </div>
      </nav>

      <div className='neo-container neo-mt-lg'>
        <div className='neo-card max-w-2xl mx-auto'>
          <div className='neo-text-center neo-mb-lg'>
            <h1 className='neo-heading-h2 text-[#222222] neo-mb-sm'>
              File New Complaint
            </h1>
            <p className='neo-body text-[#111111]'>
              Help improve your community by reporting issues
            </p>
          </div>

          <form onSubmit={handleSubmit} className='space-y-6'>
            <div>
              <label
                htmlFor='title'
                className='neo-label text-[#222222] neo-mb-sm block'
              >
                Complaint Title *
              </label>
              <input
                type='text'
                name='title'
                id='title'
                required
                value={formData.title}
                onChange={handleChange}
                className='neo-input'
                placeholder='Brief description of the issue'
              />
            </div>

            <div>
              <label
                htmlFor='description'
                className='neo-label text-[#222222] neo-mb-sm block'
              >
                Detailed Description *
              </label>
              <textarea
                name='description'
                id='description'
                rows={4}
                required
                value={formData.description}
                onChange={handleChange}
                className='neo-input'
                placeholder='Please provide detailed information about the issue...'
              />
            </div>

            <div
              className='neo-grid'
              style={{
                gridTemplateColumns: "1fr 1fr",
                gap: "var(--spacing-md)",
              }}
            >
              <div>
                <label
                  htmlFor='category'
                  className='neo-label text-[#222222] neo-mb-sm block'
                >
                  Category *
                </label>
                <select
                  name='category'
                  id='category'
                  required
                  value={formData.category}
                  onChange={handleChange}
                  className='neo-select'
                >
                  <option value=''>Select a category</option>
                  <option value='ROADS'>Roads & Infrastructure</option>
                  <option value='WATER'>Water Supply</option>
                  <option value='SANITATION'>Sanitation & Waste</option>
                  <option value='ELECTRICITY'>Electricity</option>
                  <option value='STREETLIGHTS'>Street Lights</option>
                  <option value='PARKS'>Parks & Recreation</option>
                  <option value='TRAFFIC'>Traffic & Transportation</option>
                  <option value='NOISE'>Noise Pollution</option>
                  <option value='OTHER'>Other</option>
                </select>
              </div>

              <div>
                <label
                  htmlFor='priority'
                  className='neo-label text-[#222222] neo-mb-sm block'
                >
                  Priority Level
                </label>
                <select
                  name='priority'
                  id='priority'
                  value={formData.priority}
                  onChange={handleChange}
                  className='neo-select'
                >
                  <option value='LOW'>Low</option>
                  <option value='MEDIUM'>Medium</option>
                  <option value='HIGH'>High</option>
                  <option value='URGENT'>Urgent</option>
                </select>
              </div>
            </div>

            <div>
              <label
                htmlFor='location'
                className='neo-label text-[#222222] neo-mb-sm block'
              >
                Location
              </label>
              <input
                type='text'
                name='location'
                id='location'
                value={formData.location}
                onChange={handleChange}
                className='neo-input'
                placeholder='Street address, landmark, or area'
              />
            </div>

            <div className='neo-card-footer'>
              <div
                className='neo-flex'
                style={{ justifyContent: "space-between" }}
              >
                <Link href='/user/dashboard' className='neo-button-secondary'>
                  Cancel
                </Link>
                <button
                  type='submit'
                  disabled={loading}
                  className='neo-button-primary'
                >
                  {loading ? (
                    <div className='neo-flex items-center'>
                      <div className='w-5 h-5 bg-[#222222] border-2 border-[#FFD84C] mr-2 animate-spin'></div>
                      Submitting...
                    </div>
                  ) : (
                    "Submit Complaint"
                  )}
                </button>
              </div>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
}
