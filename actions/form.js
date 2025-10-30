"use server";
import { promises as fs } from "fs";
import path from "path";

export const submitAction = async (formData) => {
  try {
    const name = formData.get("name");
    const email = formData.get("email");
    const password = formData.get("password");
    const message = formData.get("message");

    const newEntry = {
      name,
      email,
      password,
      message,
      date: new Date().toISOString(),
    };

    const filePath = path.join(process.cwd(), "zubair.json");

    let existingData = [];
    try {
      const fileContent = await fs.readFile(filePath, "utf-8");
      existingData = JSON.parse(fileContent);
    } catch (err) {
      existingData = [];
    }

    existingData.push(newEntry);
    await fs.writeFile(filePath, JSON.stringify(existingData, null, 2));

    return { success: true };
  } catch (err) {
    console.error("Error writing file:", err);
    return { success: false };
  }
};
