#!make
include .env.local

# The `@` hides the command from being shown in the prompt.

install:
		pnpm install

dev:
		pnpm run dev

vercel:
		vercel dev --listen=1444

build:
		pnpm run build

start:
		pnpm run start

ts-lint:
		pnpm run ts-lint

generate-types:
		pnpx supabase gen types typescript --project-id ${PROJECT_REF} --schema public > types/supabase.ts