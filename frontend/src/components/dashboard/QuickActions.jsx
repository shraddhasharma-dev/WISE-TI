import React, { useRef, useState } from "react";
import axios from "axios";
import { aiApi } from "../../api";

function QuickActions({ fetchParticipants }) {
  const fileInputRef = useRef(null);
  
  // State from your CSV integration
  const [isUploading, setIsUploading] = useState(false);
  
  // State from your teammate's AI email generation integration
  const [email, setEmail] = useState("");
  const [loading, setLoading] = useState(false);

  // --- CSV Upload Handler Engine ---
  const handleCardClick = () => {
    if (!isUploading && fileInputRef.current) {
      fileInputRef.current.click();
    }
  };

  const handleFileChange = async (event) => {
    const file = event.target.files[0];
    if (!file) return;

    if (!file.name.endsWith(".csv")) {
      alert("Please select a valid CSV file.");
      return;
    }

    const formData = new FormData();
    formData.append("file", file);

    setIsUploading(true);

    try {
      const response = await axios.post(
        "http://localhost:5000/api/admin/upload-roster",
        formData,
        {
          headers: {
            "Content-Type": "multipart/form-data",
          },
        }
      );

      if (response.data.success) {
        alert(`Successfully imported ${response.data.count || "the"} participants!`);
        if (fetchParticipants) fetchParticipants();
      }
    } catch (error) {
      console.error("CSV Import Failed:", error);
      alert(error.response?.data?.message || "An error occurred during upload.");
    } finally {
      setIsUploading(false);
      event.target.value = null; // Clear input to allow re-uploading the same file back-to-back
    }
  };

  // --- AI Matchmaking Handler Engine ---
  async function generateEmail() {
    setLoading(true);
    try {
      const res = await aiApi.draftEmail({
        stage: "Final Round",
        team_name: "Quantum Coders",
        participant_name: "Hargun",
      });
      setEmail(res.email);
    } catch (err) {
      console.error("AI Draft Generation Failed:", err);
    } finally {
      setLoading(false);
    }
  }

  return (
    <div className="grid grid-cols-1 md:grid-cols-2 gap-[24px]">
      {/* Hidden File Input */}
      <input
        type="file"
        ref={fileInputRef}
        onChange={handleFileChange}
        accept=".csv"
        className="hidden"
      />

      {/* Upload Card */}
      <div
        onClick={handleCardClick}
        className={`bg-white rounded-xl shadow-sm border border-[#1B4332]/10 p-8 flex flex-col items-center justify-center text-center transition-all group ${
          isUploading
            ? "opacity-60 cursor-not-allowed"
            : "cursor-pointer hover:border-[#1B4332]/40"
        }`}
      >
        <div className="w-16 h-16 rounded-full bg-[#1B4332]/5 flex items-center justify-center text-[#1B4332] mb-6 transition-transform group-hover:scale-110">
          {isUploading ? (
            <div className="w-6 h-6 border-2 border-[#1B4332] border-t-transparent rounded-full animate-spin" />
          ) : (
            <span className="material-symbols-outlined text-3xl">
              upload_file
            </span>
          )}
        </div>

        <h4 className="font-bold text-black mb-2">
          {isUploading ? "Importing Data..." : "Import Participants"}
        </h4>

        <p className="text-xs text-gray-500">
          {isUploading
            ? "Please stay on this page while parsing rows"
            : "CSV batch upload for registration management"}
        </p>
      </div>

      {/* AI Matchmaking */}
      <div className="bg-white rounded-xl shadow-sm border border-[#1B4332]/10 p-6">
        <div className="flex justify-between items-center mb-6">
          <h4 className="text-xs font-bold text-[#1B4332] uppercase tracking-widest flex items-center gap-2">
            <span className="material-symbols-outlined text-sm">
              psychology
            </span>
            AI Smart Matchmaking
          </h4>

          <button
            onClick={generateEmail}
            disabled={loading}
            className="text-[10px] font-bold text-[#1B4332] hover:underline disabled:opacity-50"
          >
            {loading ? "GENERATING..." : "RUN AUTO-DRAFT"}
          </button>
        </div>

        <div className="space-y-3">
          <div className="bg-[#F5F3F0] rounded-lg p-3 flex justify-between items-center border border-gray-200">
            <div>
              <p className="text-xs font-bold">Quantum Coders</p>
              <p className="text-[9px] text-gray-500 uppercase">
                Balanced Skills
              </p>
            </div>
            <span className="text-xs font-bold text-[#1B4332]">98% Match</span>
          </div>

          <div className="bg-[#F5F3F0] rounded-lg p-3 flex justify-between items-center border border-gray-200">
            <div>
              <p className="text-xs font-bold">Neural Knights</p>
              <p className="text-[9px] text-gray-500 uppercase">
                High Tech Compatibility
              </p>
            </div>
            <span className="text-xs font-bold text-[#1B4332]">94% Match</span>
          </div>

          {/* Render target container area when email output string registers */}
          {email && (
            <div className="bg-[#F5F3F0] rounded-lg p-4 border border-gray-200 mt-4">
              <p className="text-[10px] uppercase text-gray-500 mb-2 font-bold">
                AI Generated Email
              </p>
              <p className="text-sm text-gray-700 whitespace-pre-wrap">
                {email}
              </p>
            </div>
          )}
        </div>
      </div>
    </div>
  );
}

export default QuickActions;