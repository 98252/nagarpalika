import Link from "next/link";

export default function ComponentsShowcase() {
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
              <Link href='/' className='neo-nav-link'>
                Back to Home
              </Link>
            </div>
          </div>
        </div>
      </nav>

      <div className='neo-container neo-p-xl'>
        <div className='neo-text-center neo-mb-xl'>
          <h1 className='neo-heading-h1 neo-mb-md text-[#222222]'>
            Neo-Brutalist Design System
          </h1>
          <p className='neo-body text-[#111111]'>
            Complete component showcase and usage examples
          </p>
        </div>

        {/* Typography Section */}
        <section className='neo-section'>
          <h2 className='neo-heading-h2 neo-mb-lg text-[#222222]'>
            Typography
          </h2>
          <div
            className='neo-grid'
            style={{ gridTemplateColumns: "1fr 1fr", gap: "var(--spacing-lg)" }}
          >
            <div>
              <h1 className='neo-heading-h1 neo-mb-sm text-[#222222]'>
                Heading H1 (4rem)
              </h1>
              <h2 className='neo-heading-h2 neo-mb-sm text-[#222222]'>
                Heading H2 (3rem)
              </h2>
              <h3 className='neo-heading-h3 neo-mb-sm text-[#222222]'>
                Heading H3 (2rem)
              </h3>
              <p className='neo-subheading neo-mb-sm text-[#222222]'>
                Subheading (1.25rem)
              </p>
            </div>
            <div>
              <p className='neo-body neo-mb-sm text-[#111111]'>
                Body text (1rem) - Regular paragraph text with good readability
                and line height.
              </p>
              <p className='neo-caption neo-mb-sm text-[#111111]'>
                Caption text (0.875rem) - Smaller text for captions and
                metadata.
              </p>
              <p className='neo-label neo-mb-sm text-[#222222]'>
                Label text (0.875rem, uppercase)
              </p>
            </div>
          </div>
        </section>

        {/* Buttons Section */}
        <section className='neo-section'>
          <h2 className='neo-heading-h2 neo-mb-lg text-[#222222]'>Buttons</h2>
          <div
            className='neo-grid'
            style={{ gridTemplateColumns: "1fr 1fr", gap: "var(--spacing-lg)" }}
          >
            <div>
              <h3 className='neo-heading-h3 neo-mb-md text-[#222222]'>
                Primary Buttons
              </h3>
              <div className='neo-flex neo-mb-md'>
                <button className='neo-button-primary'>Primary Button</button>
              </div>
              <div className='neo-flex neo-mb-md'>
                <button className='neo-button-primary' disabled>
                  Disabled Button
                </button>
              </div>
            </div>
            <div>
              <h3 className='neo-heading-h3 neo-mb-md text-[#222222]'>
                Secondary Buttons
              </h3>
              <div className='neo-flex neo-mb-md'>
                <button className='neo-button-secondary'>
                  Secondary Button
                </button>
              </div>
              <div className='neo-flex neo-mb-md'>
                <button className='neo-button-secondary' disabled>
                  Disabled Button
                </button>
              </div>
            </div>
          </div>
        </section>

        {/* Cards Section */}
        <section className='neo-section'>
          <h2 className='neo-heading-h2 neo-mb-lg text-[#222222]'>Cards</h2>
          <div className='neo-grid neo-grid-3'>
            {/* Basic Card */}
            <div className='neo-card'>
              <h3 className='neo-card-title'>Basic Card</h3>
              <p className='neo-card-body'>
                This is a basic card with title and body content. It features a
                6px black border and drop shadow.
              </p>
            </div>

            {/* Feature Card */}
            <div className='neo-card neo-feature-card'>
              <div className='neo-feature-number'>01.</div>
              <h3 className='neo-card-title neo-mt-lg'>Feature Card</h3>
              <p className='neo-card-body'>
                Feature cards include a numbered label and are perfect for
                showcasing platform features.
              </p>
            </div>

            {/* Card with Footer */}
            <div className='neo-card'>
              <div className='neo-card-body neo-mb-md'>
                This card includes a footer section with additional information
                or metadata.
              </div>
              <div className='neo-card-footer'>
                <div className='neo-subheading text-[#222222]'>Card Footer</div>
                <div className='neo-caption text-[#222222]'>
                  Additional metadata
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Form Components Section */}
        <section className='neo-section'>
          <h2 className='neo-heading-h2 neo-mb-lg text-[#222222]'>
            Form Components
          </h2>
          <div
            className='neo-grid'
            style={{ gridTemplateColumns: "1fr 1fr", gap: "var(--spacing-xl)" }}
          >
            <div>
              <h3 className='neo-heading-h3 neo-mb-md text-[#222222]'>
                Input Fields
              </h3>
              <div className='neo-mb-md'>
                <label className='neo-subheading block neo-mb-sm text-[#222222]'>
                  Text Input
                </label>
                <input
                  type='text'
                  className='neo-input'
                  placeholder='Enter your text here...'
                />
              </div>
              <div className='neo-mb-md'>
                <label className='neo-subheading block neo-mb-sm text-[#222222]'>
                  Email Input
                </label>
                <input
                  type='email'
                  className='neo-input'
                  placeholder='user@example.com'
                />
              </div>
            </div>
            <div>
              <h3 className='neo-heading-h3 neo-mb-md text-[#222222]'>
                Select Dropdown
              </h3>
              <div className='neo-mb-md'>
                <label className='neo-subheading block neo-mb-sm text-[#222222]'>
                  Department
                </label>
                <select className='neo-select'>
                  <option value=''>Select a department</option>
                  <option value='roads'>Roads & Infrastructure</option>
                  <option value='water'>Water Supply</option>
                  <option value='sanitation'>Sanitation & Waste</option>
                  <option value='electricity'>Electricity</option>
                </select>
              </div>
              <div className='neo-mb-md'>
                <label className='neo-subheading block neo-mb-sm text-[#222222]'>
                  Priority Level
                </label>
                <select className='neo-select'>
                  <option value=''>Select priority</option>
                  <option value='low'>Low</option>
                  <option value='medium'>Medium</option>
                  <option value='high'>High</option>
                  <option value='urgent'>Urgent</option>
                </select>
              </div>
            </div>
          </div>
        </section>

        {/* Layout Components Section */}
        <section className='neo-section'>
          <h2 className='neo-heading-h2 neo-mb-lg text-[#222222]'>
            Layout Components
          </h2>

          {/* Container Demo */}
          <div className='neo-mb-lg'>
            <h3 className='neo-heading-h3 neo-mb-md text-[#222222]'>
              Container
            </h3>
            <div className='neo-card'>
              <p className='neo-body text-[#111111]'>
                This content is wrapped in a neo-container class, which provides
                max-width and consistent padding.
              </p>
            </div>
          </div>

          {/* Grid Demo */}
          <div className='neo-mb-lg'>
            <h3 className='neo-heading-h3 neo-mb-md text-[#222222]'>
              Grid System
            </h3>
            <div className='neo-grid neo-grid-3'>
              <div className='neo-card'>
                <h4 className='neo-subheading neo-mb-sm text-[#222222]'>
                  Grid Item 1
                </h4>
                <p className='neo-body text-[#111111]'>
                  Three-column grid layout
                </p>
              </div>
              <div className='neo-card'>
                <h4 className='neo-subheading neo-mb-sm text-[#222222]'>
                  Grid Item 2
                </h4>
                <p className='neo-body text-[#111111]'>
                  Responsive and flexible
                </p>
              </div>
              <div className='neo-card'>
                <h4 className='neo-subheading neo-mb-sm text-[#222222]'>
                  Grid Item 3
                </h4>
                <p className='neo-body text-[#111111]'>Auto-fit columns</p>
              </div>
            </div>
          </div>

          {/* Flex Demo */}
          <div className='neo-mb-lg'>
            <h3 className='neo-heading-h3 neo-mb-md text-[#222222]'>
              Flexbox Utilities
            </h3>
            <div className='neo-flex neo-mb-md'>
              <button className='neo-button-primary'>Button 1</button>
              <button className='neo-button-secondary'>Button 2</button>
              <button className='neo-button-primary'>Button 3</button>
            </div>
            <div className='neo-flex-between'>
              <span className='neo-body text-[#111111]'>
                Left aligned content
              </span>
              <span className='neo-body text-[#111111]'>
                Right aligned content
              </span>
            </div>
          </div>
        </section>

        {/* Spacing Section */}
        <section className='neo-section'>
          <h2 className='neo-heading-h2 neo-mb-lg text-[#222222]'>
            Spacing System
          </h2>
          <div
            className='neo-grid'
            style={{ gridTemplateColumns: "1fr 1fr", gap: "var(--spacing-lg)" }}
          >
            <div>
              <h3 className='neo-heading-h3 neo-mb-md text-[#222222]'>
                Margin Utilities
              </h3>
              <div className='neo-card neo-mb-xs'>
                <p className='neo-body text-[#111111]'>XS margin (8px)</p>
              </div>
              <div className='neo-card neo-mb-sm'>
                <p className='neo-body text-[#111111]'>SM margin (16px)</p>
              </div>
              <div className='neo-card neo-mb-md'>
                <p className='neo-body text-[#111111]'>MD margin (24px)</p>
              </div>
              <div className='neo-card neo-mb-lg'>
                <p className='neo-body text-[#111111]'>LG margin (48px)</p>
              </div>
              <div className='neo-card neo-mb-xl'>
                <p className='neo-body text-[#111111]'>XL margin (96px)</p>
              </div>
            </div>
            <div>
              <h3 className='neo-heading-h3 neo-mb-md text-[#222222]'>
                Padding Utilities
              </h3>
              <div className='neo-card neo-p-xs'>
                <p className='neo-body text-[#111111]'>XS padding (8px)</p>
              </div>
              <div className='neo-card neo-p-sm'>
                <p className='neo-body text-[#111111]'>SM padding (16px)</p>
              </div>
              <div className='neo-card neo-p-md'>
                <p className='neo-body text-[#111111]'>MD padding (24px)</p>
              </div>
              <div className='neo-card neo-p-lg'>
                <p className='neo-body text-[#111111]'>LG padding (48px)</p>
              </div>
              <div className='neo-card neo-p-xl'>
                <p className='neo-body text-[#111111]'>XL padding (96px)</p>
              </div>
            </div>
          </div>
        </section>

        {/* Color Tokens Section */}
        <section className='neo-section'>
          <h2 className='neo-heading-h2 neo-mb-lg text-[#222222]'>
            Color Tokens
          </h2>
          <div className='neo-grid neo-grid-3'>
            <div className='neo-card'>
              <div
                className='neo-p-md'
                style={{ backgroundColor: "#222222", color: "#EEEEEE" }}
              >
                <h4 className='neo-subheading neo-mb-sm'>Primary Neutral</h4>
                <p className='neo-caption'>#222222</p>
              </div>
            </div>
            <div className='neo-card'>
              <div
                className='neo-p-md'
                style={{ backgroundColor: "#F5F5F5", color: "#111111" }}
              >
                <h4 className='neo-subheading neo-mb-sm'>Secondary Neutral</h4>
                <p className='neo-caption'>#F5F5F5</p>
              </div>
            </div>
            <div className='neo-card'>
              <div
                className='neo-p-md'
                style={{ backgroundColor: "#FFD84C", color: "#111111" }}
              >
                <h4 className='neo-subheading neo-mb-sm'>Accent Yellow</h4>
                <p className='neo-caption'>#FFD84C</p>
              </div>
            </div>
            <div className='neo-card'>
              <div
                className='neo-p-md'
                style={{ backgroundColor: "#111111", color: "#EEEEEE" }}
              >
                <h4 className='neo-subheading neo-mb-sm'>Text Dark</h4>
                <p className='neo-caption'>#111111</p>
              </div>
            </div>
            <div className='neo-card'>
              <div
                className='neo-p-md'
                style={{ backgroundColor: "#222222", color: "#EEEEEE" }}
              >
                <h4 className='neo-subheading neo-mb-sm'>Text Light</h4>
                <p className='neo-caption'>#EEEEEE</p>
              </div>
            </div>
            <div className='neo-card'>
              <div
                className='neo-p-md'
                style={{
                  backgroundColor: "#F5F5F5",
                  border: "4px solid #222222",
                }}
              >
                <h4 className='neo-subheading neo-mb-sm'>Border Example</h4>
                <p className='neo-caption'>4px solid #222222</p>
              </div>
            </div>
          </div>
        </section>

        {/* Interactive States Section */}
        <section className='neo-section'>
          <h2 className='neo-heading-h2 neo-mb-lg text-[#222222]'>
            Interactive States
          </h2>
          <div
            className='neo-grid'
            style={{ gridTemplateColumns: "1fr 1fr", gap: "var(--spacing-lg)" }}
          >
            <div>
              <h3 className='neo-heading-h3 neo-mb-md text-[#222222]'>
                Hover Effects
              </h3>
              <p className='neo-body neo-mb-md text-[#111111]'>
                Hover over the elements below to see the interactive states:
              </p>
              <div className='neo-flex neo-mb-md'>
                <button className='neo-button-primary'>Hover Me</button>
              </div>
              <div className='neo-card neo-mb-md' style={{ cursor: "pointer" }}>
                <p className='neo-body text-[#111111]'>Hover over this card</p>
              </div>
              <Link href='#' className='neo-nav-link neo-mb-md block'>
                Hover over this link
              </Link>
            </div>
            <div>
              <h3 className='neo-heading-h3 neo-mb-md text-[#222222]'>
                Focus States
              </h3>
              <p className='neo-body neo-mb-md text-[#111111]'>
                Click on the input fields to see focus states:
              </p>
              <div className='neo-mb-md'>
                <input
                  type='text'
                  className='neo-input'
                  placeholder='Click to focus...'
                />
              </div>
              <div className='neo-mb-md'>
                <select className='neo-select'>
                  <option value=''>Click to focus...</option>
                  <option value='option1'>Option 1</option>
                </select>
              </div>
            </div>
          </div>
        </section>

        {/* Back to Home */}
        <section className='neo-section'>
          <div className='neo-text-center'>
            <Link href='/' className='neo-button-primary'>
              Back to Homepage
            </Link>
          </div>
        </section>
      </div>
    </div>
  );
}
