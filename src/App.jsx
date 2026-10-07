
import { useState } from "react";
import Header from "./components/Header";
import FilterBar from "./components/FilterBar";
import ProjectList from "./components/ProjectList";

const projects = [
    {
        id: 1,
        title: "Web-Based TB Detection System",
        category: "AI/ML",
        description:
            "A machine-learning-based screening prototype designed to support earlier TB detection using clinical and health-related indicators.",
        technologies: ["Python", "Machine Learning", "SVM"]
    },
    {
        id: 2,
        title: "Semantic Profile Page",
        category: "Frontend",
        description:
            "A responsive personal profile website created while learning semantic HTML and accessible web structure.",
        technologies: ["HTML5", "Semantic HTML", "Accessibility"]
    },
    {
        id: 3,
        title: "Interactive Profile Portfolio",
        category: "Frontend",
        description:
            "A responsive profile page enhanced with JavaScript, a theme toggle, local storage, and GitHub API integration.",
        technologies: ["JavaScript", "API", "LocalStorage"]
    },
    {
        id: 4,
        title: "MHFA Research Project",
        category: "Research",
        description:
            "A research project exploring university students' perspectives on the availability, accessibility, and cultural relevance of Mental Health First Aid resources.",
        technologies: ["Research", "Data", "Social Impact"]
    }
];

const categories = ["All", "Frontend", "AI/ML", "Research"];

function App() {
    const [selectedCategory, setSelectedCategory] = useState("All");

    const filteredProjects =
        selectedCategory === "All"
            ? projects
            : projects.filter(
                  (project) => project.category === selectedCategory
              );

    return (
        <div className="app">
            <Header />

            <main>
                <section className="intro">
                    <h2>My Projects</h2>
                    <p>
                        Explore some of the projects I have worked on while
                        developing my skills in technology, research, and
                        social impact.
                    </p>
                </section>

                <FilterBar
                    categories={categories}
                    selectedCategory={selectedCategory}
                    onCategoryChange={setSelectedCategory}
                />

                <ProjectList projects={filteredProjects} />
            </main>

            <footer>
                <p>&copy; 2026 Palesa Thetele</p>
            </footer>
        </div>
    );
}

export default App;
