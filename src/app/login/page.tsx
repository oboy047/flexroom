"use client";
import React, { useState } from "react";

const Login: React.FC = () => {
    const [role, setRole] = useState<"admin" | "user" | "">("");
    const [username, setUsername] = useState("");
    const [password, setPassword] = useState("");

    const handleRoleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
        const v = event.currentTarget.value;
        if (v === "admin" || v === "user") {
            setRole(v);
        } else {
            setRole("");
        }
    };

    const handleSubmit = (event: React.FormEvent) => {
        event.preventDefault();
        // her skal det egentlig skje en autentisering mot backend, noe som vi hopper over i Alpha
        alert(`Logger inn som ${role}: ${username} / Ekte autentisering ikke implementert enda, så dette er bare en dummy håndtering.`);

    };
    return (
        <main className="min-h-screen bg-gradient-to-br from-indigo-500 via-purple-500 to-pink-500 flex flex-col items-center justify-center p-6">
            <div style={{ maxWidth: 300, margin: "auto", padding: 20, backgroundColor: "lightgrey", borderRadius: 10, display: "flex", flexDirection: "column", justifyContent: "center" }} className="grid gap-4">
                <h1 style={{ top: 20, fontSize: 24, fontWeight: "bold" }}>Logg inn til Flexroom</h1>
                <form onSubmit={handleSubmit}>
                <div style={{ display: "flex", flexDirection: "row", justifyContent: "center", gap: 10 }}>
                    <label htmlFor="role-user" style={{ display: "flex", justifyContent: "center" }}>
                    <input
                        id="role-user"
                        type="radio"
                        name="role"
                        value="user"
                        checked={role === "user"}
                        onChange={handleRoleChange}
                    />
                    Bruker
                    </label>
                    <label htmlFor="role-admin">
                    <input
                        id="role-admin"
                        type="radio"
                        name="role"
                        value="admin"
                        checked={role === "admin"}
                        onChange={handleRoleChange}
                    />
                    Utleier
                    </label>
                </div>
                <div style={{ marginTop: 10 }}>
                    <input
                    id="username"
                    type="text"
                    placeholder="Brukernavn -dummy for nå"
                    value={username}
                    onChange={(e: React.ChangeEvent<HTMLInputElement>) =>
                        setUsername(e.target.value)
                    }
                    required
                    />
                </div>
                <div style={{ marginTop: 10 }}>
                    <input
                    id="password"
                    type="password"
                    placeholder="Passord -dummy for nå"
                    value={password}
                    onChange={(e: React.ChangeEvent<HTMLInputElement>) =>
                        setPassword(e.target.value)
                    }
                    required
                />
                </div>
                <button
                    type="submit"
                    style={{ justifyContent: "center" }}
                    className="mt-4 w-full md:w-auto px-6 py-2.5 rounded-lg bg-indigo-600 hover:bg-indigo-700 text-white font-semibold transition"
                    disabled={!role}
                    onClick={() => {
                        if (role) {
                            //hindrer at brukeren blir sparket videre uten å fylle inn noe som helst, som gir en dårlig UX i denne demoen
                            if (!username || !password) {
                            return;
                            }
                            //sparker brukeren videre til riktig dashbord basert på valgt rolle
                            if (role === "admin") {
                            window.location.href = "/admin";
                            }
                            else{
                                window.location.href = "/";
                            }
                        }
                    }}
                >
                    Logg inn
                </button>
                </form>
            </div>
        </main>
    );
};

export default Login;