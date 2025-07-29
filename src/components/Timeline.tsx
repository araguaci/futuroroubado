import React, { useState, useMemo, useEffect } from 'react';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import TimelineEventCard from './TimelineEventCard';
import CategoryIcon from './CategoryIcon';
import { ScandalEvent } from '@/types';
import { useIsMobile } from '@/hooks/use-mobile';
import { cn } from '@/lib/utils';
import { ArrowUp, Filter } from 'lucide-react';
import { Skeleton } from '@/components/ui/skeleton';
import EventDetailDialog from './EventDetailDialog';
import {
  Sheet,
  SheetClose,
  SheetContent,
  SheetDescription,
  SheetFooter,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
} from "@/components/ui/sheet";
import TimelineFilterControls from './TimelineFilterControls';
import { Link } from 'react-router-dom';
import FinancialScandalSources from './FinancialScandalSources';
import JusticeScandalSources from './JusticeScandalSources';

interface TimelineProps {
  events: ScandalEvent[];
  isLoading: boolean;
  pageType: 'politica' | 'justica' | 'financeiro';
}

// Tópicos graves predefinidos para o filtro (mantido aqui para a lógica de filtragem)
const GRAVE_TOPICS = [
  "Corrupção",
  "Desvio de Verba",
  "Impeachment",
  "Lava Jato",
  "Mensalão",
  "Petrolão",
  "Fraude",
  "Propina",
  "Escândalo"
];

const Timeline: React.FC<TimelineProps> = ({ events, isLoading, pageType }) => {
  const [activeFilter, setActiveFilter] = useState<string>('Todos');
  const [searchTerm, setSearchTerm] = useState<string>('');
  const [selectedGraveTopics, setSelectedGraveTopics] = useState<string[]>([]);
  const [selectedYear, setSelectedYear] = useState<string>('Todos');
  const [showScrollToTop, setShowScrollToTop] = useState<boolean>(false);
  const [selectedEvent, setSelectedEvent] = useState<ScandalEvent | null>(null);
  const [isDetailDialogOpen, setIsDetailDialogOpen] = useState<boolean>(false);

  const isMobile = useIsMobile();

  const pageConfig = {
    politica: {
      title: 'Linha do Tempo de Escândalos Políticos',
      icon: 'Abuso de Poder',
      subtitle: 'Uma retrospectiva dos principais casos de corrupção no Brasil.',
      navigation: [
        { text: 'Ver Escândalos da Justiça', link: '/justica' },
        { text: 'Ver Escândalos Financeiros', link: '/financeiro' },
      ],
      filterLabel: 'Governo',
      filterPlaceholder: 'Ex: Mensalão, nome, etc.',
    },
    justica: {
      title: 'Linha do Tempo de Escândalos na Justiça',
      icon: 'Venda de Sentença',
      subtitle: 'Uma retrospectiva dos principais casos de corrupção no judiciário brasileiro.',
      navigation: [
        { text: 'Ver Escândalos Políticos', link: '/' },
        { text: 'Ver Escândalos Financeiros', link: '/financeiro' },
      ],
      filterLabel: 'Estado',
      filterPlaceholder: 'Ex: Faroeste, nome, etc.',
    },
    financeiro: {
      title: 'Linha do Tempo de Escândalos Financeiros',
      icon: 'Fraude Financeira',
      subtitle: 'Uma retrospectiva dos principais casos no sistema financeiro brasileiro.',
      navigation: [
        { text: 'Ver Escândalos Políticos', link: '/' },
        { text: 'Ver Escândalos da Justiça', link: '/justica' },
      ],
      filterLabel: 'Local/Nacionalidade',
      filterPlaceholder: 'Ex: Banestado, Americanas, etc.',
    }
  };

  const config = pageConfig[pageType];

  const filters = useMemo(() => {
    const governmentCounts: { [key: string]: number } = {};
    events.forEach(event => {
      if (event.governo && event.governo !== 'Não especificado') {
        governmentCounts[event.governo] = (governmentCounts[event.governo] || 0) + 1;
      }
    });

    const governmentFilters = Object.entries(governmentCounts)
      .map(([name, count]) => ({ name, count }))
      .sort((a, b) => b.count - a.count)
      .slice(0, 7);

    const allEventsCount = events.length;

    return [{ name: 'Todos', count: allEventsCount }, ...governmentFilters];
  }, [events]);

  const years = useMemo(() => {
    const uniqueYears = new Set<number>();
    events.forEach(event => uniqueYears.add(event.year));
    const sortedYears = Array.from(uniqueYears).sort((a, b) => a - b);
    return ['Todos', ...sortedYears.map(String)];
  }, [events]);

  const filteredEvents = useMemo(() => {
    let currentEvents = events;

    if (activeFilter !== 'Todos') {
      currentEvents = currentEvents.filter(event => event.governo === activeFilter);
    }

    if (searchTerm) {
      const lowerCaseSearchTerm = searchTerm.toLowerCase();
      currentEvents = currentEvents.filter(event =>
        event.nome.toLowerCase().includes(lowerCaseSearchTerm) ||
        event.descricao.toLowerCase().includes(lowerCaseSearchTerm) ||
        (event.envolvidos && event.envolvidos.toLowerCase().includes(lowerCaseSearchTerm))
      );
    }

    if (selectedGraveTopics.length > 0) {
      const lowerCaseSelectedTopics = selectedGraveTopics.map(topic => topic.toLowerCase());
      currentEvents = currentEvents.filter(event =>
        lowerCaseSelectedTopics.some(topic =>
          event.nome.toLowerCase().includes(topic) ||
          event.descricao.toLowerCase().includes(topic)
        )
      );
    }

    if (selectedYear !== 'Todos') {
      currentEvents = currentEvents.filter(event => event.year.toString() === selectedYear);
    }

    return currentEvents;
  }, [events, activeFilter, searchTerm, selectedGraveTopics, selectedYear]);

  const handleClearFilters = () => {
    setActiveFilter('Todos');
    setSearchTerm('');
    setSelectedGraveTopics([]);
    setSelectedYear('Todos');
  };

  const handleScroll = () => {
    if (window.scrollY > 300) {
      setShowScrollToTop(true);
    } else {
      setShowScrollToTop(false);
    }
  };

  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth'
    });
  };

  const handleCardClick = (event: ScandalEvent) => {
    setSelectedEvent(event);
    setIsDetailDialogOpen(true);
  };

  useEffect(() => {
    window.addEventListener('scroll', handleScroll);
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  let lastYear: number | null = null;

  return (
    <div className="w-full max-w-6xl mx-auto p-4 sm:p-8 font-sans">
      <header className="text-center mb-8">
        <h2 className="text-3xl md:text-4xl font-bold text-gray-900"><CategoryIcon category={config.icon} className='inline font-bold w-8 h-7 mb-2 mr-2' />{config.title}</h2>
        <h3 className="text-md text-gray-600 mt-2">{config.subtitle}</h3>
      </header>

      <div className="mb-12 flex justify-center items-center gap-4 flex-wrap">
        <Sheet>
          <SheetTrigger asChild>
            <Button variant="outline">
              <Filter className="mr-2 h-4 w-4" />
              Filtros e Busca
            </Button>
          </SheetTrigger>
          <SheetContent className="w-full sm:max-w-sm">
            <SheetHeader>
              <SheetTitle>Filtros e Busca</SheetTitle>
              <SheetDescription>
                Refine os resultados da linha do tempo.
              </SheetDescription>
            </SheetHeader>
            <div className="py-4">
              <TimelineFilterControls
                isLoading={isLoading}
                filters={filters}
                activeFilter={activeFilter}
                setActiveFilter={setActiveFilter}
                searchTerm={searchTerm}
                setSearchTerm={setSearchTerm}
                selectedGraveTopics={selectedGraveTopics}
                setSelectedGraveTopics={setSelectedGraveTopics}
                years={years}
                selectedYear={selectedYear}
                setSelectedYear={setSelectedYear}
                handleClearFilters={handleClearFilters}
                filterLabel={config.filterLabel}
                filterPlaceholder={config.filterPlaceholder}
              />
            </div>
            <SheetFooter>
              <SheetClose asChild>
                <Button>Fechar</Button>
              </SheetClose>
            </SheetFooter>
          </SheetContent>
        </Sheet>
        {config.navigation.map((nav) => (
          <Button asChild variant="outline" key={nav.link}>
            <Link to={nav.link}>{nav.text}</Link>
          </Button>
        ))}
      </div>

      <div className="relative">
        <div className="absolute left-4 md:left-1/2 top-0 bottom-0 w-1 bg-gray-300 md:transform md:-translate-x-1/2" aria-hidden="true"></div>

        {isLoading ? (
          <div className="space-y-8">
            {[...Array(5)].map((_, i) => (
              <div key={i} className={cn("relative flex items-center w-full", { "md:flex-row-reverse": i % 2 === 0 })}>
                <div className="hidden md:block md:w-1/2"></div>
                <div className="z-10 absolute left-4 md:left-1/2 top-1/2 -translate-y-1/2 md:transform md:-translate-x-1/2">
                  <Skeleton className="w-4 h-4 rounded-full" />
                </div>
                <div className={cn("w-full md:w-1/2", isMobile ? "pl-10 pr-2" : (i % 2 === 0 ? "md:pr-8" : "md:pl-8"))}>
                  <Skeleton className="h-40 w-full rounded-lg" />
                </div>
              </div>
            ))}
          </div>
        ) : filteredEvents.length === 0 ? (
          <div className="text-center text-gray-600 text-lg mt-16 bg-white p-8 rounded-lg shadow-md">
            <h3 className="font-bold text-xl mb-2">Nenhum resultado</h3>
            <p>Nenhum escândalo foi encontrado com os critérios de busca/filtro selecionados.</p>
          </div>
        ) : (
          filteredEvents.map((event, index) => {
            const showYear = event.year !== lastYear;
            lastYear = event.year;
            const isLeft = !isMobile && index % 2 === 0;

            return (
              <div key={`${event.nome}-${index}`} className="relative mb-8">
                {showYear && (
                  <div className="relative h-24 flex items-center justify-center" style={{ zIndex: 2 }}>
                    <div className="absolute left-4 md:left-1/2 md:transform md:-translate-x-1/2 w-20 h-20 bg-gray-800 rounded-full flex items-center justify-center border-4 border-white shadow-md">
                      <span className="text-white text-lg font-bold">
                        {event.year}
                      </span>
                    </div>
                  </div>
                )}
                
                <div className={cn("relative flex items-center w-full", { "md:flex-row-reverse": isLeft })}>
                  <div className="hidden md:block md:w-1/2"></div>
                  <div className="z-10 absolute left-4 md:left-1/2 top-1/2 -translate-y-1/2 md:transform md:-translate-x-1/2">
                    <div className="w-4 h-4 bg-gray-800 border-2 border-white rounded-full shadow-sm"></div>
                  </div>
                  <div className={cn("w-full md:w-1/2", isMobile ? "pl-10 pr-2" : (isLeft ? "md:pr-8" : "md:pl-8"))}>
                    <TimelineEventCard event={event} isLeft={isLeft} isMobile={isMobile} onClick={handleCardClick} />
                  </div>
                </div>
              </div>
            );
          })
        )}
      </div>

      {pageType === 'financeiro' && <FinancialScandalSources />}
      {pageType === 'justica' && <JusticeScandalSources />}

      {showScrollToTop && (
        <Button
          onClick={scrollToTop}
          className="fixed bottom-4 right-4 p-3 rounded-full shadow-lg bg-gray-800 text-white hover:bg-gray-700 transition-all duration-300"
          size="icon"
        >
          <ArrowUp className="h-5 w-5" />
          <span className="sr-only">Voltar ao Topo</span>
        </Button>
      )}

      <EventDetailDialog
        event={selectedEvent}
        isOpen={isDetailDialogOpen}
        onOpenChange={setIsDetailDialogOpen}
      />
    </div>
  );
};

export default Timeline;