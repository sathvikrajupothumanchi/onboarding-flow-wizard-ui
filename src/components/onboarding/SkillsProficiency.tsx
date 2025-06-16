
import React, { useState } from 'react';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Slider } from '@/components/ui/slider';
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '@/components/ui/select';
import { PlusIcon, TrashIcon, StarIcon } from 'lucide-react';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';

interface SkillsProficiencyProps {
  formData: any;
  updateFormData: (data: any) => void;
}

const SkillsProficiency: React.FC<SkillsProficiencyProps> = ({ formData, updateFormData }) => {
  const [languages, setLanguages] = useState([
    { id: 1, language: '', proficiency: 'native' }
  ]);
  
  const [technicalSkills, setTechnicalSkills] = useState([
    { id: 1, skill: '', proficiency: [3], experience: '', lastUsed: '' }
  ]);

  const addLanguage = () => {
    const newLanguage = {
      id: languages.length + 1,
      language: '',
      proficiency: 'native'
    };
    setLanguages([...languages, newLanguage]);
  };

  const removeLanguage = (id: number) => {
    setLanguages(languages.filter(lang => lang.id !== id));
  };

  const addTechnicalSkill = () => {
    const newSkill = {
      id: technicalSkills.length + 1,
      skill: '',
      proficiency: [3],
      experience: '',
      lastUsed: ''
    };
    setTechnicalSkills([...technicalSkills, newSkill]);
  };

  const removeTechnicalSkill = (id: number) => {
    setTechnicalSkills(technicalSkills.filter(skill => skill.id !== id));
  };

  const getProficiencyLabel = (value: number) => {
    const labels = ['Beginner', 'Basic', 'Intermediate', 'Advanced', 'Expert'];
    return labels[value - 1] || 'Intermediate';
  };

  const renderStars = (count: number) => {
    return Array.from({ length: 5 }, (_, i) => (
      <StarIcon
        key={i}
        className={`w-4 h-4 ${i < count ? 'text-yellow-400 fill-current' : 'text-gray-300'}`}
      />
    ));
  };

  return (
    <div className="space-y-6">
      <Tabs defaultValue="languages" className="w-full">
        <TabsList className="grid w-full grid-cols-2">
          <TabsTrigger value="languages">Languages</TabsTrigger>
          <TabsTrigger value="technical">Technical Skills</TabsTrigger>
        </TabsList>

        <TabsContent value="languages" className="space-y-4">
          <div className="flex items-center justify-between">
            <h3 className="text-lg font-semibold">Language Proficiency</h3>
            <Button onClick={addLanguage} variant="outline" size="sm">
              <PlusIcon className="w-4 h-4 mr-2" />
              Add Language
            </Button>
          </div>

          {languages.map((lang, index) => (
            <Card key={lang.id} className="relative">
              <CardHeader className="pb-3">
                <div className="flex items-center justify-between">
                  <CardTitle className="text-base">
                    Language {index + 1}
                  </CardTitle>
                  {languages.length > 1 && (
                    <Button
                      onClick={() => removeLanguage(lang.id)}
                      variant="ghost"
                      size="sm"
                      className="text-red-600 hover:text-red-800"
                    >
                      <TrashIcon className="w-4 h-4" />
                    </Button>
                  )}
                </div>
              </CardHeader>
              <CardContent className="space-y-4">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <div className="space-y-2">
                    <Label className="text-sm font-medium">Language *</Label>
                    <Input
                      placeholder="e.g., English, Hindi, Spanish"
                      value={lang.language}
                      onChange={(e) => {
                        const updated = languages.map(l => 
                          l.id === lang.id ? { ...l, language: e.target.value } : l
                        );
                        setLanguages(updated);
                      }}
                    />
                  </div>

                  <div className="space-y-2">
                    <Label className="text-sm font-medium">Proficiency Level *</Label>
                    <Select
                      value={lang.proficiency}
                      onValueChange={(value) => {
                        const updated = languages.map(l => 
                          l.id === lang.id ? { ...l, proficiency: value } : l
                        );
                        setLanguages(updated);
                      }}
                    >
                      <SelectTrigger>
                        <SelectValue placeholder="Select proficiency" />
                      </SelectTrigger>
                      <SelectContent>
                        <SelectItem value="native">Native</SelectItem>
                        <SelectItem value="fluent">Fluent</SelectItem>
                        <SelectItem value="advanced">Advanced</SelectItem>
                        <SelectItem value="intermediate">Intermediate</SelectItem>
                        <SelectItem value="basic">Basic</SelectItem>
                      </SelectContent>
                    </Select>
                  </div>
                </div>
              </CardContent>
            </Card>
          ))}
        </TabsContent>

        <TabsContent value="technical" className="space-y-4">
          <div className="flex items-center justify-between">
            <h3 className="text-lg font-semibold">Technical Skills</h3>
            <Button onClick={addTechnicalSkill} variant="outline" size="sm">
              <PlusIcon className="w-4 h-4 mr-2" />
              Add Skill
            </Button>
          </div>

          {technicalSkills.map((skill, index) => (
            <Card key={skill.id} className="relative">
              <CardHeader className="pb-3">
                <div className="flex items-center justify-between">
                  <CardTitle className="text-base">
                    Technical Skill {index + 1}
                  </CardTitle>
                  {technicalSkills.length > 1 && (
                    <Button
                      onClick={() => removeTechnicalSkill(skill.id)}
                      variant="ghost"
                      size="sm"
                      className="text-red-600 hover:text-red-800"
                    >
                      <TrashIcon className="w-4 h-4" />
                    </Button>
                  )}
                </div>
              </CardHeader>
              <CardContent className="space-y-4">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <div className="space-y-2">
                    <Label className="text-sm font-medium">Skill/Technology *</Label>
                    <Input
                      placeholder="e.g., JavaScript, Python, React"
                      value={skill.skill}
                      onChange={(e) => {
                        const updated = technicalSkills.map(s => 
                          s.id === skill.id ? { ...s, skill: e.target.value } : s
                        );
                        setTechnicalSkills(updated);
                      }}
                    />
                  </div>

                  <div className="space-y-2">
                    <Label className="text-sm font-medium">Years of Experience</Label>
                    <Input
                      placeholder="e.g., 2.5 years"
                      value={skill.experience}
                      onChange={(e) => {
                        const updated = technicalSkills.map(s => 
                          s.id === skill.id ? { ...s, experience: e.target.value } : s
                        );
                        setTechnicalSkills(updated);
                      }}
                    />
                  </div>

                  <div className="md:col-span-2 space-y-3">
                    <div className="flex items-center justify-between">
                      <Label className="text-sm font-medium">Proficiency Level *</Label>
                      <div className="flex items-center space-x-2">
                        <div className="flex">{renderStars(skill.proficiency[0])}</div>
                        <Badge variant="outline">
                          {getProficiencyLabel(skill.proficiency[0])}
                        </Badge>
                      </div>
                    </div>
                    <Slider
                      value={skill.proficiency}
                      onValueChange={(value) => {
                        const updated = technicalSkills.map(s => 
                          s.id === skill.id ? { ...s, proficiency: value } : s
                        );
                        setTechnicalSkills(updated);
                      }}
                      max={5}
                      min={1}
                      step={1}
                      className="w-full"
                    />
                  </div>

                  <div className="space-y-2">
                    <Label className="text-sm font-medium">Last Used</Label>
                    <Select
                      value={skill.lastUsed}
                      onValueChange={(value) => {
                        const updated = technicalSkills.map(s => 
                          s.id === skill.id ? { ...s, lastUsed: value } : s
                        );
                        setTechnicalSkills(updated);
                      }}
                    >
                      <SelectTrigger>
                        <SelectValue placeholder="When did you last use this?" />
                      </SelectTrigger>
                      <SelectContent>
                        <SelectItem value="current">Currently using</SelectItem>
                        <SelectItem value="6months">Within 6 months</SelectItem>
                        <SelectItem value="1year">Within 1 year</SelectItem>
                        <SelectItem value="2years">Within 2 years</SelectItem>
                        <SelectItem value="older">More than 2 years ago</SelectItem>
                      </SelectContent>
                    </Select>
                  </div>
                </div>
              </CardContent>
            </Card>
          ))}
        </TabsContent>
      </Tabs>
    </div>
  );
};

export default SkillsProficiency;
