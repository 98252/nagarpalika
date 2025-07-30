"use client";

import { useState } from "react";
import { useRouter } from "next/navigation";
import Link from "next/link";

interface FormData {
  name: string;
  email: string;
  department: string;
  phone: string;
}

export default function NewAuthority() {
  const router = useRouter();
  const [formData, setFormData] = useState<FormData>({
    name: "",
    email: "",
    department: "",
    phone: "",
  });
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>
  ) => {
    const { name, value } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);
    setError("");

    try {
      const response = await fetch("/api/admin/authorities", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(formData),
      });

      if (response.ok) {
        router.push("/admin/dashboard");
      } else {
        const errorData = await response.json();
        setError(errorData.error || "Failed to create authority");
      }
    } catch (error) {
      console.error("Error creating authority:", error);
      setError("An unexpected error occurred");
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className='min-h-screen bg-[#F5F5F5] py-12'>
      <div className='neo-container'>
        <div className='max-w-2xl mx-auto'>
          {/* Header */}
          <div className='neo-text-center neo-mb-xl'>
            <Link
              href='/admin/dashboard'
              className='neo-heading-h1 text-[#222222] hover:text-[#FFD84C] transition-colors duration-200'
            >
              NagarPalika
            </Link>
            <h1 className='neo-heading-h2 neo-mt-lg neo-mb-md text-[#222222]'>
              Add New Authority
            </h1>
            <p className='neo-body text-[#111111]'>
              Create a new authority account for complaint management
            </p>
          </div>

          {/* Form */}
          <div className='neo-card'>
            <form onSubmit={handleSubmit} className='space-y-8'>
              {error && (
                <div className='neo-card bg-red-100 border-red-500 text-red-800 neo-p-md'>
                  {error}
                </div>
              )}

              {/* Name */}
              <div>
                <label
                  htmlFor='name'
                  className='neo-subheading block neo-mb-sm text-[#222222]'
                >
                  Full Name *
                </label>
                <input
                  id='name'
                  name='name'
                  type='text'
                  required
                  value={formData.name}
                  onChange={handleChange}
                  className='neo-input'
                  placeholder='Enter full name'
                />
              </div>

              {/* Email */}
              <div>
                <label
                  htmlFor='email'
                  className='neo-subheading block neo-mb-sm text-[#222222]'
                >
                  Email Address *
                </label>
                <input
                  id='email'
                  name='email'
                  type='email'
                  autoComplete='email'
                  required
                  value={formData.email}
                  onChange={handleChange}
                  className='neo-input'
                  placeholder='authority@example.com'
                />
              </div>

              {/* Department */}
              <div>
                <label
                  htmlFor='department'
                  className='neo-subheading block neo-mb-sm text-[#222222]'
                >
                  Department *
                </label>
                <select
                  id='department'
                  name='department'
                  required
                  value={formData.department}
                  onChange={handleChange}
                  className='neo-select'
                >
                  <option value=''>Select a department</option>
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

              {/* Phone */}
              <div>
                <label
                  htmlFor='phone'
                  className='neo-subheading block neo-mb-sm text-[#222222]'
                >
                  Phone Number
                </label>
                <input
                  id='phone'
                  name='phone'
                  type='tel'
                  value={formData.phone}
                  onChange={handleChange}
                  className='neo-input'
                  placeholder='+91 98765 43210'
                />
              </div>

              {/* Submit Buttons */}
              <div className='neo-flex pt-6'>
                <button
                  type='submit'
                  disabled={loading}
                  className='neo-button-primary flex-1'
                >
                  {loading ? "Creating..." : "Create Authority"}
                </button>
                <Link href='/admin/dashboard' className='neo-button-secondary'>
                  Cancel
                </Link>
              </div>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
}
