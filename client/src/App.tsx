import { Switch, Route } from "wouter";
import { queryClient } from "./lib/queryClient";
import { QueryClientProvider } from "@tanstack/react-query";
import { Toaster } from "@/components/ui/toaster";
import { TooltipProvider } from "@/components/ui/tooltip";
import Home from "@/pages/Home";
import NotFound from "@/pages/not-found";
import AuditoriaWPO from "@/pages/AuditoriaWPO";
import OptimizacionTecnica from "@/pages/OptimizacionTecnica";
import CoreWebVitals from "@/pages/CoreWebVitals";
import MonitoreoContinuo from "@/pages/MonitoreoContinuo";
import ConsultoriaSEO from "@/pages/ConsultoriaSEO";
import BlogWPO from "@/pages/BlogWPO";
import GuiasGratuitas from "@/pages/GuiasGratuitas";
import TestVelocidad from "@/pages/TestVelocidad";
import Webinars from "@/pages/Webinars";
import CentroAyuda from "@/pages/CentroAyuda";

function Router() {
  return (
    <Switch>
      <Route path="/" component={Home} />
      <Route path="/auditoria-wpo" component={AuditoriaWPO} />
      <Route path="/optimizacion-tecnica" component={OptimizacionTecnica} />
      <Route path="/core-web-vitals" component={CoreWebVitals} />
      <Route path="/monitoreo-continuo" component={MonitoreoContinuo} />
      <Route path="/consultoria-seo" component={ConsultoriaSEO} />
      <Route path="/blog" component={BlogWPO} />
      <Route path="/guias-gratuitas" component={GuiasGratuitas} />
      <Route path="/test-velocidad" component={TestVelocidad} />
      <Route path="/webinars" component={Webinars} />
      <Route path="/centro-ayuda" component={CentroAyuda} />
      <Route component={NotFound} />
    </Switch>
  );
}

function App() {
  return (
    <QueryClientProvider client={queryClient}>
      <TooltipProvider>
        <Toaster />
        <Router />
      </TooltipProvider>
    </QueryClientProvider>
  );
}

export default App;
