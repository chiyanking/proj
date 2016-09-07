package src.main.java.test;



public class IpFilter  {
//	private String redirectPath = "/error.jsp";
//	ArrayList<String> ips;
//
//	@Override
//	public void destroy() {
//		// TODO Auto-generated method stub
//
//	}
//
//	@Override
//	public void doFilter(ServletRequest arg0, ServletResponse arg1,
//			FilterChain arg2) throws IOException, ServletException {
//		HttpServletRequest request = (HttpServletRequest) arg0;
//		HttpServletResponse response = (HttpServletResponse) arg1;
//		String contextpath = request.getContextPath();
//		if ("/".equals(contextpath)) {
//			contextpath = "";
//		}
//		if (check(request)) {
//			System.out.println("������");
//			arg2.doFilter(request, response);
//		} else {
//			System.out.println("������");
//			response.sendRedirect(response
//					.encodeURL(contextpath + redirectPath));
//		}
//
//	}
//
//	public String getIpAddr(HttpServletRequest request) {
//		String ip = request.getHeader("x-forwarded-for");
//
//		if(ip == null || ip.length() == 0 || "unknown".equalsIgnoreCase(ip)) {
//
//		ip = request.getHeader("Proxy-Client-IP");
//
//		}
//
//		if(ip == null || ip.length() == 0 || "unknown".equalsIgnoreCase(ip)) {
//
//		ip = request.getHeader("WL-Proxy-Client-IP");
//
//		}
//
//		if(ip == null || ip.length() == 0 || "unknown".equalsIgnoreCase(ip)) {
//
//		ip = request.getRemoteAddr();
//
//		}
//
//		return "127.0.0.1";
//	}
//
//
//
//	private boolean check(HttpServletRequest request) {
//		String ipc = getIpAddr(request);
//		System.out.println("�ͻ���Ip��" + ipc);
//		for (String ipStr : ips) {
//			if (ipc != null) {
//				if (ipc.equals(ipStr)) {
//					return true;
//				}
//			}
//		}
//		return false;
//	}
//
//	@Override
//	public void init(FilterConfig conf) throws ServletException {
//		ips = new ArrayList<String>();
//		String ip = conf.getInitParameter("ipFilter");
//		ips.add(ip);
//	}

}
