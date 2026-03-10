import Link from "next/link";

export default function Page() {
  return (
    <section>
      <h1 className="mb-8 text-2xl font-semibold tracking-tighter">
        Prof. Hernan Huwyler, MBA, CPA, CAIO
      </h1>

      <p className="mb-4">
        <strong>AI GRC Director | AI Risk Manager | Quantitative Risk Lead</strong>
      </p>
      <p className="mb-4">
        Speaker, Corporate Trainer and Executive Advisor — Copenhagen, Denmark
      </p>

      <p className="mb-4">
        I am an AI risk manager and GRC executive empowering leaders to drive
        business objectives through AI governance, digital compliance, and
        responsible AI in multinational companies. With over two decades of
        global executive experience, I specialize in steering Fortune 500
        organizations to achieve financial success and operational excellence.
      </p>

      <p className="mb-4">
        My expertise spans quantitative risk management, algorithmic auditing,
        responsible AI frameworks, digital compliance, and process audits across
        diverse industries, including technology, consultancy, energy, and
        engineering. I actively partner with global boards, event organizers,
        and multinational HR departments, offering freelance consulting,
        corporate training, and executive speaking engagements on the
        intersection of AI adoption and regulatory compliance.
      </p>

      <p className="mb-4">
        Armed with an MBA, CAIO and CPA, I possess deep knowledge of financial
        audits under US GAAP and IFRS. My technical capabilities include
        advanced AI model validation using Python, TensorFlow, PyTorch,
        Scikit-learn, and XGBoost, as well as ERP systems like SAP FiCo, SAP
        GRC, and SAP MM. Fluent in English and Spanish, I leverage
        cross-cultural expertise to build trust and align stakeholders in
        global enterprises.
      </p>

      <h2 className="mt-8 mb-4 text-xl font-semibold">Core Competencies</h2>

      <ul className="mb-4 list-disc list-inside space-y-1">
        <li><strong>AI Governance and Strategy:</strong> Responsible AI, Algorithmic Auditing, Digital Compliance, EU AI Act, NIST AI RMF, ISO 42001</li>
        <li><strong>Quantitative Risk Management:</strong> Model Risk, Predictive Risk Models, AI Impact Assessments, Monte Carlo Simulations, Stress Testing, Value at Risk (VaR)</li>
        <li><strong>Executive Management:</strong> Corporate Governance, Board Advisory, Freelance Consulting, Executive Training, Keynote Speaking</li>
        <li><strong>AI and Machine Learning Stack:</strong> Python, R, TensorFlow, PyTorch, Scikit-learn, Keras, XGBoost</li>
        <li><strong>Compliance and Auditing:</strong> SAP FiCo, SAP GRC, SOX 404, GDPR, FCPA, ISO 27001/27701, NIS 2, DORA</li>
        <li><strong>Enterprise Risk Management:</strong> Internal Controls, COSO Framework, Performance Audits, ESG Reporting, ISO 31000</li>
      </ul>

      <h2 className="mt-8 mb-4 text-xl font-semibold">Recognition — Thinkers360 Rankings</h2>

      <ul className="mb-4 list-disc list-inside space-y-1">
        <li>🏆 Top 10 Global Thought Leader in AI Ethics</li>
        <li>🏆 Top 10 Global Thought Leader in AI Governance</li>
        <li>🏆 Top 25 Global Thought Leader in GRC</li>
        <li>🏆 Top 25 Global Thought Leader in Risk Management</li>
        <li>🏆 Top 50 Global Thought Leader in Education</li>
        <li>🏆 Top 50 Global Thought Leader in IT Operations</li>
      </ul>

      <h2 className="mt-8 mb-4 text-xl font-semibold">Publications</h2>

      <ul className="mb-4 list-disc list-inside space-y-2">
        <li>
          <strong>Book:</strong>{" "}
          <em>AI Management Systems: Operational Playbook for Chief AI Officers and Compliance Risk Managers</em>{" "}
          (ISBN 9798233615009)
        </li>
        <li>
          <strong>Paper:</strong>{" "}
          <em>Standardized Threat Taxonomy for AI Security, Governance, and Regulatory Compliance</em>{" "}
          (<a href="https://arxiv.org/abs/2511.21901" target="_blank" rel="noopener noreferrer" className="underline">arXiv:2511.21901</a>)
        </li>
        <li>
          <strong>Paper:</strong>{" "}
          <em>Quantitative Risk Assessment in R: An Open-Source Convolutional Framework</em>{" "}
          (<a href="https://doi.org/10.5281/zenodo.17687261" target="_blank" rel="noopener noreferrer" className="underline">DOI 10.5281/zenodo.17687261</a>)
        </li>
        <li>
          <strong>Book:</strong>{" "}
          <em>GRC Framework: Governance for Risk and Compliance</em> (Ediciones Roble)
        </li>
      </ul>

      <h2 className="mt-8 mb-4 text-xl font-semibold">Services</h2>

      <ul className="mb-4 list-disc list-inside space-y-1">
        <li>AI Governance strategy and implementation consulting</li>
        <li>EU AI Act compliance programs</li>
        <li>ISO 42001 and NIST AI RMF alignment</li>
        <li>Algorithmic auditing and AI model validation</li>
        <li>Quantitative risk modeling (Monte Carlo, VaR, stress testing)</li>
        <li>Responsible AI frameworks and policy design</li>
        <li>Digital compliance and GRC transformation</li>
        <li>Board advisory on AI risk and strategy</li>
        <li>CAIO and AI governance certification programs</li>
        <li>Corporate training and executive speaking engagements</li>
      </ul>

      <h2 className="mt-8 mb-4 text-xl font-semibold">Contact</h2>

      <p className="mb-4">
        <a href="https://linkedin.com/in/hernanwyler" target="_blank" rel="noopener noreferrer" className="underline">
          LinkedIn — linkedin.com/in/hernanwyler
        </a>
      </p>

      <div className="my-8">
        <Link href="/blog" className="underline">
          Read articles and insights →
        </Link>
      </div>
    </section>
  );
}
