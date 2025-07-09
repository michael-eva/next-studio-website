import { useState, useMemo } from 'react';
import { issues, troubleshootingData } from '../data';
import { Search, Filter, ExternalLink, AlertCircle, CheckCircle, Clock, ChevronDown, ChevronUp, ArrowLeft } from 'lucide-react';
import { EnhancedTroubleshootingTips } from '../../../components/TroubleshootingGuideData';

interface Issue {
  id: string;
  platform: string;
  title: string;
  category: string;
  severity: string;
  tags: string[];
  description: string;
  symptoms: string[];
  solutions: {
    method: string;
    description: string;
  }[];
  frameworkSteps: number[];
}

interface Platform {
  id: string;
  name: string;
  description: string;
  logo: string;
  color: string;
  issueCount: number;
  status: string;
}

interface Severity {
  id: string;
  name: string;
  color: string;
  description: string;
}

export default function TroubleshootingGuide() {
  const [selectedCategory, setSelectedCategory] = useState('all');
  const [selectedSeverity, setSelectedSeverity] = useState('all');
  const [searchTerm, setSearchTerm] = useState('');
  const [selectedPlatform, setSelectedPlatform] = useState<string | null>(null);
  const [expandedIssue, setExpandedIssue] = useState<string | null>(null);

  const currentPlatform = troubleshootingData.platforms.find((p: Platform) => p.id === selectedPlatform);

  const getSeverityColor = (severity: string) => {
    const severityObj = troubleshootingData.severities.find((s: Severity) => s.id === severity);
    return severityObj?.color || '#6b7280';
  };

  const getSeverityIcon = (severity: string) => {
    switch (severity) {
      case 'critical': return <AlertCircle className="w-4 h-4" />;
      case 'moderate': return <Clock className="w-4 h-4" />;
      case 'minor': return <CheckCircle className="w-4 h-4" />;
      default: return <AlertCircle className="w-4 h-4" />;
    }
  };

  const filteredIssues = useMemo(() => {
    let filteredIssues = issues;

    if (selectedPlatform) {
      filteredIssues = filteredIssues.filter(issue => issue.platform === selectedPlatform);
    }

    if (searchTerm) {
      const term = searchTerm.toLowerCase();
      filteredIssues = filteredIssues.filter((issue: Issue) =>
        issue.title.toLowerCase().includes(term) ||
        (issue.description && issue.description.toLowerCase().includes(term)) ||
        issue.tags.some((tag: string) => tag.toLowerCase().includes(term)) ||
        issue.symptoms.some((symptom: string) => symptom.toLowerCase().includes(term))
      );
    }

    if (selectedCategory !== 'all') {
      filteredIssues = filteredIssues.filter((issue: Issue) => issue.category === selectedCategory);
    }

    if (selectedSeverity !== 'all') {
      filteredIssues = filteredIssues.filter((issue: Issue) => issue.severity === selectedSeverity);
    }

    return filteredIssues;
  }, [selectedPlatform, searchTerm, selectedCategory, selectedSeverity]);

  // If a platform is selected, show the detailed platform view
  if (selectedPlatform) {
    return (
      <div className="space-y-8">
        {/* Header */}
        <div className="mb-8">
          <button
            onClick={() => setSelectedPlatform(null)}
            className="flex items-center gap-2 text-blue-600 hover:text-blue-800 mb-4 transition-colors"
          >
            <ArrowLeft className="w-4 h-4" />
            Back to All Platforms
          </button>
          <div className="flex items-center gap-4">
            <div
              className="w-12 h-12 rounded-xl flex items-center justify-center text-white font-bold text-xl"
              style={{ backgroundColor: currentPlatform?.color }}
            >
              {currentPlatform?.logo}
            </div>
            <div>
              <h3 className="text-3xl font-bold text-gray-900">{currentPlatform?.name}</h3>
              <p className="text-gray-600">{currentPlatform?.description}</p>
            </div>
          </div>
        </div>

        {/* Filters */}
        <div className="bg-white rounded-2xl shadow-sm border border-gray-200 p-6 mb-8">
          <div className="flex flex-col lg:flex-row gap-4">
            <div className="flex-1 relative">
              <Search className="absolute left-3 top-3 w-5 h-5 text-gray-400" />
              <input
                type="text"
                placeholder="Search issues, symptoms, or solutions..."
                className="w-full pl-10 pr-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
              />
            </div>
            <div className="flex gap-4">
              <select
                className="px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500"
                value={selectedCategory}
                onChange={(e) => setSelectedCategory(e.target.value)}
              >
                <option value="all">All Categories</option>
                {troubleshootingData.categories.map((cat: any) => (
                  <option key={cat.id} value={cat.id}>{cat.name}</option>
                ))}
              </select>
              <select
                className="px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500"
                value={selectedSeverity}
                onChange={(e) => setSelectedSeverity(e.target.value)}
              >
                <option value="all">All Severities</option>
                {troubleshootingData.severities.map((sev: any) => (
                  <option key={sev.id} value={sev.id}>{sev.name}</option>
                ))}
              </select>
            </div>
          </div>
        </div>

        {/* Issues List */}
        <div className="space-y-4">
          {filteredIssues.length === 0 ? (
            <div className="bg-white rounded-2xl shadow-sm border border-gray-200 p-12 text-center">
              <div className="text-gray-400 mb-4">
                <Search className="w-12 h-12 mx-auto" />
              </div>
              <h3 className="text-lg font-medium text-gray-900 mb-2">No issues found</h3>
              <p className="text-gray-600">Try adjusting your search criteria or filters.</p>
            </div>
          ) : (
            filteredIssues.map((issue) => (
              <div key={issue.id} className="bg-white rounded-2xl shadow-sm border border-gray-200 overflow-hidden">
                <div
                  className="p-6 cursor-pointer hover:bg-gray-50 transition-colors"
                  onClick={() => setExpandedIssue(expandedIssue === issue.id ? null : issue.id)}
                >
                  <div className="flex items-start justify-between">
                    <div className="flex-1">
                      <div className="flex items-center gap-3 mb-3">
                        <div
                          className="flex items-center gap-2 px-3 py-1 rounded-full text-sm font-medium text-white"
                          style={{ backgroundColor: getSeverityColor(issue.severity) }}
                        >
                          {getSeverityIcon(issue.severity)}
                          {issue.severity.toUpperCase()}
                        </div>
                        <span className="px-3 py-1 bg-gray-100 text-gray-700 rounded-full text-sm font-medium">
                          {troubleshootingData.categories.find((c: any) => c.id === issue.category)?.name}
                        </span>
                      </div>
                      <h3 className="text-xl font-semibold text-gray-900 mb-2">{issue.title}</h3>
                      <p className="text-gray-600 mb-4">{issue.description}</p>
                      <div className="flex flex-wrap gap-2">
                        {issue.tags.map(tag => (
                          <span key={tag} className="px-2 py-1 bg-blue-50 text-blue-700 rounded text-sm">
                            {tag}
                          </span>
                        ))}
                      </div>
                    </div>
                    <div className="ml-4">
                      {expandedIssue === issue.id ?
                        <ChevronUp className="w-5 h-5 text-gray-400" /> :
                        <ChevronDown className="w-5 h-5 text-gray-400" />
                      }
                    </div>
                  </div>
                </div>

                {expandedIssue === issue.id && (
                  <div className="border-t border-gray-200 p-6 bg-gray-50">
                    <div className="grid md:grid-cols-2 gap-6">
                      <div>
                        <h4 className="font-semibold text-gray-900 mb-3 flex items-center gap-2">
                          <AlertCircle className="w-4 h-4 text-red-500" />
                          Symptoms
                        </h4>
                        <ul className="space-y-2">
                          {issue.symptoms.map((symptom, idx) => (
                            <li key={idx} className="flex items-start gap-2 text-gray-700">
                              <span className="w-1.5 h-1.5 bg-red-400 rounded-full mt-2 flex-shrink-0"></span>
                              {symptom}
                            </li>
                          ))}
                        </ul>
                      </div>
                      <div>
                        <h4 className="font-semibold text-gray-900 mb-3 flex items-center gap-2">
                          <CheckCircle className="w-4 h-4 text-green-500" />
                          Solutions
                        </h4>
                        <div className="space-y-4">
                          {issue.solutions.map((solution, idx) => (
                            <div key={idx} className="border-l-4 border-green-400 pl-4">
                              <h5 className="font-medium text-gray-900 mb-1">{solution.method}</h5>
                              <p className="text-gray-700 text-sm">{solution.description}</p>
                            </div>
                          ))}
                        </div>
                      </div>
                    </div>
                    {issue.frameworkSteps && (
                      <div className="mt-6 pt-4 border-t border-gray-300">
                        <p className="text-sm text-gray-600">
                          <strong>Framework Steps:</strong> Use steps {issue.frameworkSteps.join(', ')} from the troubleshooting framework
                        </p>
                      </div>
                    )}
                  </div>
                )}
              </div>
            ))
          )}
        </div>
      </div>
    );
  }

  // Default view showing universal tips and platform cards
  return (
    <div className="space-y-8">
      {/* Universal Troubleshooting Tips Section */}
      <EnhancedTroubleshootingTips />

      {/* Search and Filter Section */}
      <div className="bg-white rounded-2xl shadow-sm border border-gray-200 p-8 mb-12">
        <div className="relative mb-6">
          <Search className="absolute left-4 top-4 w-5 h-5 text-gray-400" />
          <input
            type="text"
            placeholder="Search across all platforms for issues, symptoms, or solutions..."
            className="w-full pl-12 pr-4 py-3 border border-gray-300 rounded-xl focus:ring-2 focus:ring-blue-500 focus:border-transparent text-lg"
            value={searchTerm}
            onChange={(e) => setSearchTerm(e.target.value)}
          />
        </div>
        <div className="flex flex-wrap gap-4 items-center">
          <div className="flex items-center gap-2">
            <Filter className="w-4 h-4 text-gray-500" />
            <span className="text-sm font-medium text-gray-700">Quick Filters:</span>
          </div>
          <select
            className="px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 text-sm"
            value={selectedCategory}
            onChange={(e) => setSelectedCategory(e.target.value)}
          >
            <option value="all">All Categories</option>
            {troubleshootingData.categories.map((cat: any) => (
              <option key={cat.id} value={cat.id}>{cat.name}</option>
            ))}
          </select>
          <select
            className="px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 text-sm"
            value={selectedSeverity}
            onChange={(e) => setSelectedSeverity(e.target.value)}
          >
            <option value="all">All Severities</option>
            {troubleshootingData.severities.map((sev: any) => (
              <option key={sev.id} value={sev.id}>{sev.name}</option>
            ))}
          </select>
        </div>
      </div>

      {/* Platform Cards */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
        {troubleshootingData.platforms.map((platform: Platform) => (
          <div
            key={platform.id}
            onClick={() => setSelectedPlatform(platform.id)}
            className="bg-white rounded-2xl shadow-sm border border-gray-200 p-6 cursor-pointer hover:shadow-md hover:-translate-y-1 transition-all duration-200 group"
          >
            <div className="flex items-center gap-4 mb-4">
              <div
                className="w-12 h-12 rounded-xl flex items-center justify-center text-white font-bold text-xl group-hover:scale-110 transition-transform"
                style={{ backgroundColor: platform.color }}
              >
                {platform.logo}
              </div>
              <div>
                <h3 className="text-lg font-semibold text-gray-900">{platform.name}</h3>
              </div>
            </div>
            <p className="text-gray-600 text-sm mb-4 leading-relaxed">{platform.description}</p>
            <div className="flex items-center justify-between">
              <span
                className="px-3 py-1 rounded-full text-sm font-medium"
                style={{
                  backgroundColor: `${platform.color}20`,
                  color: platform.color
                }}
              >
                {platform.issueCount} issues
              </span>
              <ExternalLink className="w-4 h-4 text-gray-400 group-hover:text-gray-600" />
            </div>
          </div>
        ))}
      </div>

      {/* Global Search Results */}
      {searchTerm && !selectedPlatform && (
        <div className="mt-12">
          <h2 className="text-2xl font-semibold text-gray-900 mb-6">
            Search Results ({filteredIssues.length})
          </h2>
          <div className="space-y-4">
            {filteredIssues.map((issue: Issue) => {
              const platform = troubleshootingData.platforms.find((p: Platform) => p.id === issue.platform);
              return (
                <div key={issue.id} className="bg-white rounded-xl shadow-sm border border-gray-200 p-6">
                  <div className="flex items-start gap-4">
                    <div
                      className="w-10 h-10 rounded-lg flex items-center justify-center text-white font-bold"
                      style={{ backgroundColor: platform?.color }}
                    >
                      {platform?.logo}
                    </div>
                    <div className="flex-1">
                      <div className="flex items-center gap-3 mb-2">
                        <span className="text-sm font-medium text-gray-600">{platform?.name}</span>
                        <div
                          className="flex items-center gap-1 px-2 py-1 rounded text-xs font-medium text-white"
                          style={{ backgroundColor: getSeverityColor(issue.severity) }}
                        >
                          {getSeverityIcon(issue.severity)}
                          {issue.severity.toUpperCase()}
                        </div>
                      </div>
                      <h3 className="text-lg font-semibold text-gray-900 mb-2">{issue.title}</h3>
                      <p className="text-gray-600 text-sm mb-3">{issue.description}</p>
                      <button
                        onClick={() => setSelectedPlatform(issue.platform)}
                        className="text-blue-600 hover:text-blue-800 text-sm font-medium"
                      >
                        View Details →
                      </button>
                    </div>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      )}
    </div>
  );
}