import { motion, useReducedMotion } from 'framer-motion';
import { Wrench } from 'lucide-react';
import SectionWrapper, { childVariants, childNoMotionVariants } from './SectionWrapper';
import { skillsData } from '../data/content';
import './Skills.css';

export default function Skills() {
  const prefersReducedMotion = useReducedMotion();
  const variants = prefersReducedMotion ? childNoMotionVariants : childVariants;

  return (
    <SectionWrapper id="skills">
      <motion.div variants={variants} className="section-label">
        <Wrench size={14} />
        Skills
      </motion.div>

      <motion.h2 variants={variants} className="section-title">
        Technologies I <em>work with</em>
      </motion.h2>

      {/* Skills Grid by Category */}
      <div className="skills__categories">
        {skillsData.map((category) => (
          <motion.div
            key={category.category}
            className="skills__category"
            variants={variants}
          >
            <h3 className="skills__category-title">{category.category}</h3>
            <div className="skills__list">
              {category.skills.map((skill) => (
                <div key={skill.name} className="skills__item">
                  {skill.name}
                </div>
              ))}
            </div>
          </motion.div>
        ))}
      </div>
    </SectionWrapper>
  );
}
