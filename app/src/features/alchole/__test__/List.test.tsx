import { beforeEach, describe, expect, test, vi } from "vitest";
import { render, screen } from "@testing-library/react";
import { List } from "../";
import { MemoryRouter } from "react-router-dom";

vi.mock("@functional/FetchData", () => ({
  UseFetchDataValue: vi.fn().mockReturnValue([
    {
      alchole_uid: "a66f6blqs51tf88naavvnuujp00n31g30neiyips",
      alchole_name: "独楽蔵 生もと純米 TAHITO",
      genre_id: "1",
      genre: "日本酒",
      image: "/images/tahito.jpg",
      labels: [
        {
          label: "杜の蔵",
          value: "福岡県久留米市",
        },
        {
          label: "米",
          value: "山田錦",
        },
        {
          label: "精米歩合",
          value: "65%",
        },
      ],
      reviews: [
        {
          author: "管理者",
          content:
            "香りは生もと由来のミルクキャンディーの様。滑らかな米の旨味、伸びのある酸を含むバナナを連想",
        },
      ],
    },
  ]),
}));

describe("Test alchole feature components", () => {
  beforeEach(() => {
    render(
      <MemoryRouter>
        <List />
      </MemoryRouter>
    );
  });

  test("Should show alchole data list", () => {
    expect(screen.getByText("独楽蔵 生もと純米 TAHITO"));
  });

  test("Should show label of alchole data", () => {
    const label = screen.getByTestId("alchole-label-test");
    expect(label.textContent).toMatch("杜の蔵");
    expect(label.textContent).toMatch("福岡県久留米市");
    expect(label.textContent).toMatch("米");
    expect(label.textContent).toMatch("山田錦");
    expect(label.textContent).toMatch("精米歩合");
    expect(label.textContent).toMatch("65%");
  });
});
