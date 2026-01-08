-- Create volunteers table in your Neon database
-- Run this SQL in your Neon SQL Editor (https://console.neon.tech)

CREATE TABLE IF NOT EXISTS volunteers (
  id SERIAL PRIMARY KEY,
  nombres VARCHAR(255) NOT NULL,
  apellidos VARCHAR(255) NOT NULL,
  dni VARCHAR(8) NOT NULL,
  celular VARCHAR(9) NOT NULL,
  email VARCHAR(255) NOT NULL,
  ayuda TEXT NOT NULL,
  created_at TIMESTAMP DEFAULT NOW()
);

-- Create an index on email for faster lookups
CREATE INDEX idx_volunteers_email ON volunteers(email);

-- Create an index on created_at for sorting by date
CREATE INDEX idx_volunteers_created_at ON volunteers(created_at DESC);
