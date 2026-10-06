import { supabase } from "./supabase";

export async function submitReport(report) {
  const { data, error } = await supabase
    .from("reports")
    .insert([
      {
        title: report.title,
        location: report.location,
        issue_type: report.issueType,
        description: report.description,
      },
    ])
    .select()
    .single();

  if (error) {
    console.error("Supabase error:", error);
    throw new Error("Report submission failed");
  }

  return {
    message: "Report saved successfully!",
    report: data,
  };
}

export async function getReports() {
  const { data, error } = await supabase
    .from("reports")
    .select("*")
    .order("created_at", { ascending: false });

  if (error) {
    console.error("Supabase error:", error);
    throw new Error("Failed to fetch reports");
  }

  return data.map((report) => ({
    id: report.id,
    title: report.title,
    location: report.location,
    issueType: report.issue_type,
    description: report.description,
    createdAt: report.created_at,
  }));
}