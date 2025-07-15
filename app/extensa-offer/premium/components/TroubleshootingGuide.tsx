'use client'
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
        {/* Platform Header */}
        <div className="mb-8">
          <button
            onClick={() => setSelectedPlatform(null)}
            className="flex items-center gap-2 text-blue-600 hover:text-blue-800 mb-6 transition-colors font-medium"
          >
            <ArrowLeft className="w-4 h-4" />
            Back to Platform Selection
          </button>
          <div className="bg-gradient-to-r from-gray-50 to-blue-50 rounded-2xl p-6 border border-gray-200">
            <div className="flex items-center gap-4">
              <div className="w-16 h-16 rounded-2xl overflow-hidden shadow-lg">
                <img src={currentPlatform?.logo} alt={currentPlatform?.name} className="w-full h-full object-cover" />
              </div>
              <div className="flex-1">
                <h3 className="text-3xl font-bold text-gray-900 mb-2">{currentPlatform?.name}</h3>
                <p className="text-gray-600 mb-3">{currentPlatform?.description}</p>
                <div className="flex items-center gap-4 text-sm">
                  <span className="flex items-center gap-2">
                    <div className="w-2 h-2 bg-green-500 rounded-full"></div>
                    {currentPlatform?.issueCount} common issues documented
                  </span>
                  <span className="flex items-center gap-2">
                    <div className="w-2 h-2 bg-blue-500 rounded-full"></div>
                    Proven solutions for each issue
                  </span>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Quick Stats */}
        <div className="grid md:grid-cols-3 gap-4 mb-6">
          <div className="bg-red-50 border border-red-200 rounded-xl p-4">
            <div className="flex items-center gap-2 mb-2">
              <AlertCircle className="w-5 h-5 text-red-500" />
              <span className="font-semibold text-red-700">Critical Issues</span>
            </div>
            <p className="text-2xl font-bold text-red-600">
              {filteredIssues.filter(issue => issue.severity === 'critical').length}
            </p>
          </div>
          <div className="bg-orange-50 border border-orange-200 rounded-xl p-4">
            <div className="flex items-center gap-2 mb-2">
              <Clock className="w-5 h-5 text-orange-500" />
              <span className="font-semibold text-orange-700">Moderate Issues</span>
            </div>
            <p className="text-2xl font-bold text-orange-600">
              {filteredIssues.filter(issue => issue.severity === 'moderate').length}
            </p>
          </div>
          <div className="bg-green-50 border border-green-200 rounded-xl p-4">
            <div className="flex items-center gap-2 mb-2">
              <CheckCircle className="w-5 h-5 text-green-500" />
              <span className="font-semibold text-green-700">Minor Issues</span>
            </div>
            <p className="text-2xl font-bold text-green-600">
              {filteredIssues.filter(issue => issue.severity === 'minor').length}
            </p>
          </div>
        </div>

        {/* Filters */}
        {/* <div className="bg-white rounded-2xl shadow-sm border border-gray-200 p-6 mb-8">
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
        </div> */}

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
            <>
              {/* Priority Issues Section */}
              {filteredIssues.filter(issue => issue.severity === 'critical').length > 0 && (
                <div className="mb-8">
                  <div className="flex items-center gap-3 mb-4">
                    <AlertCircle className="w-6 h-6 text-red-500" />
                    <h3 className="text-xl font-semibold text-gray-900">Critical Issues</h3>
                  </div>
                  <div className="space-y-4">
                    {filteredIssues
                      .filter(issue => issue.severity === 'critical')
                      .map((issue) => (
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
                      ))}
                  </div>
                </div>
              )}

              {/* All Other Issues */}
              {filteredIssues.filter(issue => issue.severity !== 'critical').length > 0 && (
                <div>
                  <h3 className="text-xl font-semibold text-gray-900 mb-4">All Other Issues</h3>
                  <div className="space-y-4">
                    {filteredIssues
                      .filter(issue => issue.severity !== 'critical')
                      .map((issue) => (
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
                      ))}
                  </div>
                </div>
              )}
            </>
          )}
        </div>
      </div>
    );
  }

  // Default view showing universal tips and platform cards
  return (
    <div className="space-y-8">
      {/* Platform Selection Cards */}
      <div className="mb-8">
        <h3 className="text-xl font-semibold text-gray-900 mb-4 text-center">
          Choose Your Platform to Get Started
        </h3>
        <p className="text-gray-600 text-center mb-6 max-w-2xl mx-auto">
          Select your no-code platform below to access curated troubleshooting guides with the most common issues and proven solutions.
        </p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
        {troubleshootingData.platforms.map((platform: Platform) => (
          <div
            key={platform.id}
            onClick={() => setSelectedPlatform(platform.id)}
            className="bg-white rounded-2xl shadow-sm border border-gray-200 p-6 cursor-pointer hover:shadow-lg hover:-translate-y-2 transition-all duration-300 group relative overflow-hidden"
          >
            {/* Hover effect overlay */}
            <div className="absolute inset-0 bg-gradient-to-br from-transparent to-black/5 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>

            <div className="relative z-10">
              <div className="flex items-center gap-4 mb-4">
                <div className="w-12 h-12 rounded-xl overflow-hidden shadow-lg">
                  <img src={platform.logo} alt={platform.name} className="w-full h-full object-cover" />
                </div>
                <div>
                  <h3 className="text-lg font-semibold text-gray-900 group-hover:text-gray-800">{platform.name}</h3>
                </div>
              </div>
              <p className="text-gray-600 text-sm mb-4 leading-relaxed">{platform.description}</p>
              <div className="flex flex-col items-center justify-between gap-2">
                <span
                  className="px-3 py-1 rounded-full text-sm font-medium"
                  style={{
                    backgroundColor: `${platform.color}20`,
                    color: platform.color
                  }}
                >
                  {platform.issueCount} common issues
                </span>
                <div className="flex items-center gap-1 text-gray-400 group-hover:text-gray-600 transition-colors">
                  <span className="text-sm font-medium">View Issues</span>
                  <ExternalLink className="w-4 h-4" />
                </div>
              </div>
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
                    <div className="w-10 h-10 rounded-lg overflow-hidden shadow-lg">
                      <img src={platform?.logo} alt={platform?.name} className="w-full h-full object-cover" />
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