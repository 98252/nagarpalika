# NagarPalika - Citizen Authority Platform

A modern web application that connects citizens with authorities for efficient complaint management and resolution.

## Features

### For Citizens

- File complaints with detailed descriptions and location information
- Track complaint status in real-time
- View assigned authorities and their departments
- Secure authentication using GitHub OAuth

### For Administrators

- Comprehensive dashboard with statistics
- Manage and assign authorities to complaints
- Update complaint status and priority
- Add, edit, and remove authorities
- View all complaints with filtering options

## Tech Stack

- **Frontend**: Next.js 15, React 19, TypeScript, Tailwind CSS
- **Backend**: Next.js API Routes
- **Database**: PostgreSQL with Prisma ORM
- **Authentication**: NextAuth.js with GitHub OAuth
- **Styling**: Tailwind CSS

## Prerequisites

- Node.js 18+
- PostgreSQL database
- GitHub OAuth App (for user authentication)

## Setup Instructions

### 1. Clone the Repository

```bash
git clone <repository-url>
cd nagarpalika
```

### 2. Install Dependencies

```bash
npm install
```

### 3. Environment Configuration

Create a `.env.local` file in the root directory with the following variables:

```env
# Database
DATABASE_URL="postgresql://username:password@localhost:5432/nagarpalika"

# NextAuth
NEXTAUTH_URL="http://localhost:3000"
NEXTAUTH_SECRET="your-nextauth-secret-key-here"

# GitHub OAuth (for user authentication)
GITHUB_ID="your-github-client-id"
GITHUB_SECRET="your-github-client-secret"

# Admin credentials (will be created automatically)
ADMIN_EMAIL="admin@nagarpalika.com"
ADMIN_PASSWORD="admin123"
ADMIN_NAME="System Administrator"
```

### 4. Database Setup

#### Option A: Using Prisma Migrate (Recommended for Production)

```bash
npm run db:generate
npm run db:migrate
```

#### Option B: Using Prisma Push (Development)

```bash
npm run db:generate
npm run db:push
```

### 5. GitHub OAuth Setup

1. Go to GitHub Settings > Developer settings > OAuth Apps
2. Create a new OAuth App
3. Set Homepage URL to `http://localhost:3000`
4. Set Authorization callback URL to `http://localhost:3000/api/auth/callback/github`
5. Copy the Client ID and Client Secret to your `.env.local` file

### 6. Run the Application

```bash
npm run dev
```

The application will be available at `http://localhost:3000`

## Usage

### For Citizens

1. Visit the application homepage
2. Click "File a Complaint" or "Citizen Portal"
3. Sign in with your GitHub account
4. File new complaints or track existing ones

### For Administrators

1. Visit `/admin/login`
2. Use the admin credentials from your environment variables
3. Access the admin dashboard to manage complaints and authorities

## API Endpoints

### User Endpoints

- `GET /api/user/complaints` - Get user's complaints
- `POST /api/user/complaints` - Create new complaint

### Admin Endpoints

- `POST /api/admin/login` - Admin authentication
- `GET /api/admin/complaints` - Get all complaints
- `GET /api/admin/authorities` - Get all authorities
- `GET /api/admin/stats` - Get dashboard statistics
- `PATCH /api/admin/complaints/[id]/status` - Update complaint status
- `PATCH /api/admin/complaints/[id]/assign` - Assign authority to complaint

### Authentication

- `GET /api/auth/signin` - Sign in page
- `GET /api/auth/signout` - Sign out
- `GET /api/auth/callback/github` - GitHub OAuth callback

## Database Schema

The application uses the following main entities:

- **User**: Citizens who file complaints (managed by NextAuth)
- **Admin**: System administrators
- **Authority**: Government officials who handle complaints
- **Complaint**: Citizen complaints with status tracking

## Development

### Available Scripts

- `npm run dev` - Start development server
- `npm run build` - Build for production
- `npm run start` - Start production server
- `npm run lint` - Run ESLint
- `npm run db:generate` - Generate Prisma client
- `npm run db:push` - Push schema to database
- `npm run db:migrate` - Run database migrations

### Project Structure

```
nagarpalika/
├── app/
│   ├── api/           # API routes
│   ├── admin/         # Admin pages
│   ├── user/          # User pages
│   ├── globals.css    # Global styles
│   ├── layout.tsx     # Root layout
│   └── page.tsx       # Landing page
├── lib/
│   └── prisma.ts      # Prisma client
├── prisma/
│   └── schema.prisma  # Database schema
├── scripts/
│   └── init-admin.js  # Admin initialization
└── public/            # Static assets
```

## Security Features

- Password hashing with bcrypt
- JWT-based authentication for admin
- OAuth authentication for users
- Input validation and sanitization
- Protected API routes

## Contributing

1. Fork the repository
2. Create a feature branch
3. Make your changes
4. Add tests if applicable
5. Submit a pull request

## License

This project is licensed under the MIT License.
