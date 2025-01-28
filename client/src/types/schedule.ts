export interface Schedule {
  id: string; // A unique identifier
  title: string; // Title of the schedule (e.g., "Morning Run")
  description?: string; // Optional description
  date: string; // Date in ISO format (e.g., "2025-01-22")
  time: string; // Time (e.g., "07:00")
}
