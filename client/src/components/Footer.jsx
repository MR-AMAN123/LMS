import React from "react";
import { Separator } from "@/components/ui/separator";
import { Globe } from "lucide-react";
import { Link } from "react-router-dom";

const Footer = () => {
  return (
    <footer className="bg-gray-900 text-gray-300 px-8 py-12">
      <h1 className="text-white font-semibold mb-12 ml-20">
        Explore top skills and certifications
      </h1>
      <div className="max-w-7xl mx-auto grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-8">
        <div>
          <h3 className="text-white font-semibold mb-3">In-demand Careers</h3>
          <ul className="space-y-2 text-sm">
            <li>
              <Link to="/" className="hover:underline">
                Data Scientist
              </Link>
            </li>
            <li>
              <Link to="/" className="hover:underline">
                Full Stack Web Developer
              </Link>
            </li>
            <li>
              <Link to="/" className="hover:underline">
                Cloud Engineer
              </Link>
            </li>
            <li>
              <Link to="/" className="hover:underline">
                Project Manager
              </Link>
            </li>
            <li>
              <Link to="/" className="hover:underline">
                Game Developer
              </Link>
            </li>
            <li>
              <Link to="/" className="hover:underline">
                All Career Accelerators
              </Link>
            </li>
          </ul>
        </div>

        <div>
          <h3 className="text-white font-semibold mb-3">Web Development</h3>
          <ul className="space-y-2 text-sm">
            <li>
              <Link to="/" className="hover:underline">
                JavaScript
              </Link>
            </li>
            <li>
              <Link to="/" className="hover:underline">
                React JS
              </Link>
            </li>
            <li>
              <Link to="/" className="hover:underline">
                Angular
              </Link>
            </li>
            <li>
              <Link to="/" className="hover:underline">
                Java
              </Link>
            </li>
          </ul>
        </div>

        {/* Column 3 */}
        <div>
          <h3 className="text-white font-semibold mb-3">IT Certifications</h3>
          <ul className="space-y-2 text-sm">
            <li>
              <Link to="/" className="hover:underline">
                Amazon AWS
              </Link>
            </li>
            <li>
              <Link to="/" className="hover:underline">
                Cloud Practitioner
              </Link>
            </li>
            <li>
              <Link to="/" className="hover:underline">
                Azure Fundamentals
              </Link>
            </li>
            <li>
              <Link to="/" className="hover:underline">
                Solutions Architect
              </Link>
            </li>
            <li>
              <Link to="/" className="hover:underline">
                Kubernetes
              </Link>
            </li>
          </ul>
        </div>

        {/* Column 4 */}
        <div>
          <h3 className="text-white font-semibold mb-3">Leadership</h3>
          <ul className="space-y-2 text-sm">
            <li>
              <Link to="/" className="hover:underline">
                Leadership
              </Link>
            </li>
            <li>
              <Link to="/" className="hover:underline">
                Management Skills
              </Link>
            </li>
            <li>
              <Link to="/" className="hover:underline">
                Project Management
              </Link>
            </li>
            <li>
              <Link to="/" className="hover:underline">
                Productivity
              </Link>
            </li>
            <li>
              <Link to="/" className="hover:underline">
                Emotional Intelligence
              </Link>
            </li>
          </ul>
        </div>

        {/* Column 5 */}
        <div>
          <h3 className="text-white font-semibold mb-3">Data Science</h3>
          <ul className="space-y-2 text-sm">
            <li>
              <Link to="/" className="hover:underline">
                Python
              </Link>
            </li>
            <li>
              <Link to="/" className="hover:underline">
                Machine Learning
              </Link>
            </li>
            <li>
              <Link to="/" className="hover:underline">
                ChatGPT
              </Link>
            </li>
            <li>
              <Link to="/" className="hover:underline">
                Deep Learning
              </Link>
            </li>
          </ul>
        </div>

      
        <div>
          <h3 className="text-white font-semibold mb-3">Communication</h3>
          <ul className="space-y-2 text-sm">
            <li>
              <Link to="/" className="hover:underline">
                Communication Skills
              </Link>
            </li>
            <li>
              <Link to="/" className="hover:underline">
                Presentation
              </Link>
            </li>
            <li>
              <Link to="/" className="hover:underline">
                Public Speaking
              </Link>
            </li>
            <li>
              <Link to="/" className="hover:underline">
                Writing
              </Link>
            </li>
            <li>
              <Link to="/" className="hover:underline">
                PowerPoint
              </Link>
            </li>
          </ul>
        </div>

   
        <div>
          <h3 className="text-white font-semibold mb-3">In-demand Careers</h3>
          <ul className="space-y-2 text-sm">
            <li>
              <Link to="/" className="hover:underline">
                Data Scientist
              </Link>
            </li>
            <li>
              <Link to="/" className="hover:underline">
                Full Stack Web Developer
              </Link>
            </li>
            <li>
              <Link to="/" className="hover:underline">
                Cloud Engineer
              </Link>
            </li>
            <li>
              <Link to="/" className="hover:underline">
                Project Manager
              </Link>
            </li>
            <li>
              <Link to="/" className="hover:underline">
                Game Developer
              </Link>
            </li>
            <li>
              <Link to="/" className="hover:underline">
                All Career Accelerators
              </Link>
            </li>
          </ul>
        </div>

        <div>
          <h3 className="text-white font-semibold mb-3">Web Development</h3>
          <ul className="space-y-2 text-sm">
            <li>
              <Link to="/" className="hover:underline">
                JavaScript
              </Link>
            </li>
            <li>
              <Link to="/" className="hover:underline">
                React JS
              </Link>
            </li>
            <li>
              <Link to="/" className="hover:underline">
                Angular
              </Link>
            </li>
            <li>
              <Link to="/" className="hover:underline">
                Java
              </Link>
            </li>
          </ul>
        </div>

        <div>
          <h3 className="text-white font-semibold mb-3">IT Certifications</h3>
          <ul className="space-y-2 text-sm">
            <li>
              <Link to="/" className="hover:underline">
                Amazon AWS
              </Link>
            </li>
            <li>
              <Link to="/" className="hover:underline">
                Cloud Practitioner
              </Link>
            </li>
            <li>
              <Link to="/" className="hover:underline">
                Azure Fundamentals
              </Link>
            </li>
            <li>
              <Link to="/" className="hover:underline">
                Solutions Architect
              </Link>
            </li>
            <li>
              <Link to="/" className="hover:underline">
                Kubernetes
              </Link>
            </li>
          </ul>
        </div>

        <div>
          <h3 className="text-white font-semibold mb-3">Leadership</h3>
          <ul className="space-y-2 text-sm">
            <li>
              <Link to="/" className="hover:underline">
                Leadership
              </Link>
            </li>
            <li>
              <Link to="/" className="hover:underline">
                Management Skills
              </Link>
            </li>
            <li>
              <Link to="/" className="hover:underline">
                Project Management
              </Link>
            </li>
            <li>
              <Link to="/" className="hover:underline">
                Productivity
              </Link>
            </li>
            <li>
              <Link to="/" className="hover:underline">
                Emotional Intelligence
              </Link>
            </li>
          </ul>
        </div>

        <div>
          <h3 className="text-white font-semibold mb-3">Data Science</h3>
          <ul className="space-y-2 text-sm">
            <li>
              <Link to="/" className="hover:underline">
                Python
              </Link>
            </li>
            <li>
              <Link to="/" className="hover:underline">
                Machine Learning
              </Link>
            </li>
            <li>
              <Link to="/" className="hover:underline">
                ChatGPT
              </Link>
            </li>
            <li>
              <Link to="/" className="hover:underline">
                Deep Learning
              </Link>
            </li>
          </ul>
        </div>

        <div>
          <h3 className="text-white font-semibold mb-3">Communication</h3>
          <ul className="space-y-2 text-sm">
            <li>
              <Link to="/" className="hover:underline">
                Communication Skills
              </Link>
            </li>
            <li>
              <Link to="/" className="hover:underline">
                Presentation
              </Link>
            </li>
            <li>
              <Link to="/" className="hover:underline">
                Public Speaking
              </Link>
            </li>
            <li>
              <Link to="/" className="hover:underline">
                Writing
              </Link>
            </li>
            <li>
              <Link to="/" className="hover:underline">
                PowerPoint
              </Link>
            </li>
          </ul>
        </div>
      </div>

      {/* Divider */}
      <Separator className="bg-gray-700 my-10" />

      {/* Bottom Section */}
      <div className="max-w-7xl mx-auto flex flex-col md:flex-row justify-between items-center gap-6">
        <p className="text-gray-400 text-sm">© 2025 Learnova, Inc.</p>

        <div className="flex flex-wrap gap-6 text-sm">
          <p className="mt-6 text-center text-xs  text-gray-500">
            <Link
              to="/terms"
              className="hover:underline"
              onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}
            >
              Terms & Conditions
            </Link>
            {" | "}
            <Link
              to="/policy"
              className="hover:underline"
              onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}
            >
              P_Policy
            </Link>
          </p>
        </div>

        <button className="flex items-center gap-2 border border-gray-600 rounded-md px-3 py-1 text-sm hover:border-gray-400">
          <Globe className="h-4 w-4" />
          English
        </button>
      </div>
    </footer>
  );
};

export default Footer;
